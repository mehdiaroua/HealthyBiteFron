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
    this.postService.addPost(this.post.title, this.post.content)
      .subscribe(() => {
        this.post = new Post();
        this.router.navigate(['/post/posts']);
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
