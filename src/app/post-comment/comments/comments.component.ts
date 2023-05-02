import { Component, OnInit,Input } from '@angular/core';
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


  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsByPost(this.postId)
      .subscribe(comments => this.comments = comments);
  }

}
