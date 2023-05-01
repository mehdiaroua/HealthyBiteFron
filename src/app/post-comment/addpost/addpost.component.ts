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
  selectedFile: File | null = null;
  submitted = false;
  constructor(private postService: PostService, private router: Router) { }



  save(formData: FormData) {
    this.postService.addPost(formData)
      .subscribe(() => {
        this.post = new Post();
        this.selectedFile = null;
        this.router.navigate(['/post/posts']);
      }, error => console.log(error));
  }


   onSubmit() {
    this.submitted = true;
    const formData = new FormData();
    formData.append('title', this.post.title);
    formData.append('content', this.post.content);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    this.save(formData);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  
}
