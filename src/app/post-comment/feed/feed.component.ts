import { Component, NgModule, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { BrowserModule } from '@angular/platform-browser'
import { MatDialog } from '@angular/material/dialog';
import { AddpostComponent } from '../addpost/addpost.component';
import { CommentService } from 'src/app/comment.service';
import { CommentsComponent } from '../comments/comments.component';
import { Comment } from 'src/app/Models/PostComment/comment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',

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
  clickedPosts: Set<number> = new Set(); // create a Set to keep track of clicked posts

  constructor(private postService: PostService, public dialog: MatDialog, private commentService: CommentService) { }
  
  ngOnInit() {
    this.getAllPosts();
  }

addComment(postId: number, content: string) {
  const newComment: Comment = {
    id: Date.now(),
    postId,
    content,
    replies: []
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
  this.commentService.deleteComment(id)
    .subscribe(
      () => console.log(`Comment with ID ${id} deleted`),
      error => console.error(error)
    );
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



  getAllPosts() {
    this.postService.getAllPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  deletePost(posts: Post): void {
    if (confirm("Are you sure you want to delete this post?")) {
      this.postService.deletePost(posts).subscribe(() => {
        this.posts = this.posts.filter(p => p !== posts);
      });
    }
  }



toggleComments() {
    this.showComments = !this.showComments;
  }
// toggle the clicked state for a post
  toggleClicked(postId: number) {
    if (this.clickedPosts.has(postId)) {
      this.clickedPosts.delete(postId);
    } else {
      this.clickedPosts.add(postId);
    }
  }

  // check if a post has been clicked
  isClicked(postId: number): boolean {
    return this.clickedPosts.has(postId);
  }
}
