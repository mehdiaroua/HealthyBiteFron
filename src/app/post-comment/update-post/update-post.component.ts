import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
   post!: Post;
   imageFile!: File;

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(postId).subscribe(post => {
      this.post = post;
    });
  }

  onImageSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
      this.imageFile = fileInput.files[0];
    }
  }

  onUpdatePost() {
    const { id, title, content } = this.post;
    this.postService.updatePostAndImage(id, title, content, this.imageFile)
      .subscribe(updatedPost => {
        alert(`Post updated successfully!`);
        this.router.navigate(['/posts', updatedPost.id]);
      }, error => {
        alert(`Error updating post: ${error.message}`);
      });
  }
}
