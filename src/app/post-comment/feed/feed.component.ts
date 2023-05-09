import { Component, NgModule, OnInit } from '@angular/core';
import {  Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { BrowserModule } from '@angular/platform-browser'
import { MatDialog } from '@angular/material/dialog';
import { AddpostComponent } from '../addpost/addpost.component';
import { CommentService } from 'src/app/comment.service';
import { CommentsComponent } from '../comments/comments.component';
import { Comment } from 'src/app/Models/PostComment/comment';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Reply } from 'src/app/Models/PostComment/reply';
import { StorageService } from 'src/app/Service1/storage.service';
import { User } from 'src/app/Class/user';
import { MessageService } from 'primeng/api';
import { LikeType } from 'src/app/Models/PostComment/Like';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  providers: [MessageService],
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  comments: Comment[] = [];
  posts: Post[] = [];
  postId!: number;
  showIcons = false;
  currentPage = 1;
  postsPerPage = 5;
  showComments: boolean = false;
  public LikeType = LikeType;
    posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(this.posts);
  clickedPosts: Set<number> = new Set();
  replyContent!: string;
  User: any;
  public user = this.storageService.getUser();
  numberOfLikes!: number;
  likeCount!: number;
  filteredPosts: Post[] = [];
  searchQuery: string = '';
  searchTerm: string = '';


  private baseUrl = 'http://localhost:8080'; 
  constructor(private clipboard: Clipboard,private http: HttpClient,private messageService: MessageService, private postService: PostService, public dialog: MatDialog, private commentService: CommentService, private storageService: StorageService) { }
  ngOnInit() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts.sort((a, b) => {
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
      });
    });
    this.User = this.storageService.getUser();
  }
getPostLikes(postId: string): Observable<number> {
  return this.http.get<Post>(`${this.baseUrl}api/test/posts/${postId}`).pipe(
    map(post => post.numberOfLikes),
    catchError(error => {
      console.error('Error loading post likes:', error);
      return of(0); // Return a fallback value of 0
    })
  );
}
 copyLink(post: any) {
    const postLink = `${window.location.origin}/posts/${post.id}`;
   this.clipboard.copy(postLink);
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Post Link Copied successfully!' });

  }
  addComment(postId: number, content: string) {
    const newComment: Comment = {
      id: Date.now(),
      showReply: false,
      postId,
      content,
      replies: [],

    };

    this.commentService.addComment(postId, newComment).subscribe(
      (comment) => {
        const postIndex = this.posts.findIndex(post => post.id === postId);
        this.posts[postIndex].comments.push(comment);
        console.log('Comment added successfully:', comment);
      },
      error => {
        console.error('Error adding comment:', error);
      }
    );
  }

  deleteComment(id: number): void {
    if (confirm("Are you sure you want to delete this comment?")) {
      this.commentService.deleteComment(id)
        .subscribe(() => {
          console.log(`Comment with ID ${id} deleted`);
          this.getCommentsByPost(this.postId);
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Comment deleted successfully!' });
        setTimeout(() => {
          location.reload();
        }, 1000);
        }, error => {
          console.error(error);
        });
    }
  }
  postImageURL(imageData: string): string {
    return `data:image/jpeg;base64,${imageData}`;
  }
  nextPage() {
    this.currentPage++;
    window.scrollTo(0, 0);
  }
  previousPage() {
    this.currentPage--;
    window.scrollTo(0, 0);
  }
  openCreatePostModal() {
    this.dialog.open(AddpostComponent, {
      width: '500px'
    });
  }
 getAllPosts(searchTerm: string = '') {
  this.postService.getAllPosts().subscribe((data: Post[]) => {
    this.posts = data.filter((post) =>
      post.user.username.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
      return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    });
  });
}

  toggleLikesP(postId: number, likeType: LikeType): void {
  const user = 6; // replace with actual user ID
  this.postService.toggleLikesP(postId, likeType, user).subscribe(post => {
    const updatedPosts = this.posts$.getValue().map((p: Post) => p.id === post.id ? post : p);
    this.posts$.next(updatedPosts);
              location.reload();
  });  
  }
 canLike(post: Post): boolean {
return post.likes.findIndex(l => l.user.id === this.user.id) === -1}
  canDislike(post: Post): boolean {
    return post.dislikes.findIndex(l => l.user.id === this.user) === -1;
  }
  getCommentsByPost(postId: number) {
    this.commentService.getCommentsByPost(postId)
      .subscribe((data: Comment[]) => {
        this.comments = data;
      });

  }
  deletePost(posts: Post): void {
    if (confirm("Are you sure you want to delete this post?")) {
      this.postService.deletePost(posts).subscribe(() => {
        this.posts = this.posts.filter(p => p !== posts);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Post deleted successfully!' });
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
    }
  }
  toggleComments() {
    this.showComments = !this.showComments;
  }
  toggleClicked(postId: number) {
    if (this.clickedPosts.has(postId)) {
      this.clickedPosts.delete(postId);
    } else {
      this.clickedPosts.add(postId);
    }
  }
  isClicked(postId: number): boolean {
    return this.clickedPosts.has(postId);
  }  
    search(): void {
    if (!this.searchQuery) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }
}