import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  post: Post = new Post();
  submitted = false;
  constructor(private postService: PostService, private router: Router) { }


  save() {
    const { title, content } = this.post;
    this.postService.addPost(title, content)
      .subscribe(data => console.log(data), error => console.log(error));
    this.post = new Post();
    this.router.navigate(['/post/posts']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
