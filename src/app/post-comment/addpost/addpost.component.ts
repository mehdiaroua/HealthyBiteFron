import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
  providers: [UserService, MessageService],
  

})
export class AddpostComponent {
  user!: any;
  imageSrc!: string;
  post: Post = new Post();
  selectedFile: File | null = null;
    imageFile!: File;
  submitted = false;
  
  constructor(private location: Location,private postService: PostService, public dialog: MatDialog,private router: Router,private messageService:MessageService, private userService:StorageService) { }


ngOnInit(){
this.user = this.userService.getUser();
console.log(this.user);

}

  save() {
  this.postService.addPost(this.post.title, this.post.content, this.imageFile)
    .subscribe(
      data => {
        this.messageService.add({ severity: 'success',summary: 'Success Message', detail: 'Post Ajouté avec Succés' });
        this.post = new Post();
           setTimeout(() => {
          location.reload();
        }, 1000); 
        
      },
      error => console.log(error)
    );
}



   onSubmit() {
    this.submitted = true;
    this.save();
  }

onFileSelected(event: any) {
this.imageFile = event.target.files[0];
const reader = new FileReader();
reader.onload = (e: any) => {
this.imageSrc = e.target.result;
};
reader.readAsDataURL(this.imageFile);
  }
  
closeModal(event: Event): void {
  event.preventDefault();
  this.dialog.closeAll();
}



  
  
}
