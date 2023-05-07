import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
  providers:[UserService,MessageService]

})
export class AddpostComponent {
    user!:any;
  post: Post = new Post();
  selectedFile: File | null = null;
    imageFile!: File;
  submitted = false;
  constructor(private postService: PostService, private router: Router,private messageService:MessageService, private userService:StorageService) { }

ngOnInit(){
this.user = this.userService.getUser();
console.log(this.user);

}

  save() {
     this.postService.addPost(this.post.title, this.post.content,this.imageFile)
    .subscribe(data => console.log(data), error => console.log(error));
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Post Ajouté avec Succés' });
    this.post = new Post();
                    location.reload();

    this.router.navigate(['/post/posts']);
    
  }


   onSubmit() {
    this.submitted = true;
    this.save();
  }

onFileSelected(event: any) {
  this.imageFile = event.target.files[0];
}

  
  
}
