import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { StorageService } from 'src/app/Service1/storage.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
   post!: Post;
   imageFile!: File;
  user!: any;

  constructor(private postService: PostService,
              private router: Router,
    private route: ActivatedRoute,
  private userService:StorageService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
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
  const userId = this.user.id; // Get userId from the logged-in user
  this.postService.updatePostAndImage(id, title, content, userId, this.imageFile)
    .subscribe(updatedPost => {
      alert(`Post updated successfully!`);
      this.router.navigate(['/posts', updatedPost.id]);
    }, error => {
      alert(`Error updating post: ${error.message}`);
    });
}

}
