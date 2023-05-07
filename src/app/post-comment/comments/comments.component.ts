import { Component, OnInit,Input } from '@angular/core';
import { User } from 'src/app/Class/user';
import { Post } from 'src/app/Models/PostComment/Post';
import { Comment } from 'src/app/Models/PostComment/comment';
import { CommentService } from 'src/app/comment.service';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
 @Input() postId!: number;
  comments!: Comment[];
  @Input() content!: string;
    User: any;
  @Input() replies!: string;
  posts: Post[] = [];
    public user = this.storageService.getUser();




  constructor(private commentService: CommentService, private storageService : StorageService) { }

  ngOnInit(): void {
    this.commentService.getCommentsByPost(this.postId)
      .subscribe(comments => this.comments = comments);
      this.User = this.storageService.getUser();

  }

  deleteComment(id: number): void {
  this.commentService.deleteComment(id)
    .subscribe(
      () => console.log(`Comment with ID ${id} deleted`),
      error => console.error(error)
    );
  }
  
  addComment(postId: number, content: string) {
    const newComment: Comment = {
  user: new User,
    id: Date.now(),
    showReply:false,
    postId,
    content,
    replies: []  };
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

}
