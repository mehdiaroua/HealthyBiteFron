import { Component, OnInit,Input } from '@angular/core';
import { Post } from 'src/app/Models/PostComment/Post';
import { Comment } from 'src/app/Models/PostComment/comment';
import { CommentService } from 'src/app/comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
 @Input() postId!: number;
  comments!: Comment[];
  @Input() content!: string;
  @Input() replies!: string;
  posts: Post[] = [];



  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsByPost(this.postId)
      .subscribe(comments => this.comments = comments);
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
