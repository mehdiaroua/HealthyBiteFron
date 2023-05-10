import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
  selectedProduct!: Post;
  post!: Post;
  constructor(private postService:PostService, private route: ActivatedRoute){}


ngOnInit(){
  const id = +this.route.snapshot.params['id'];
  this.postService.getPostById(id).subscribe(
    post => this.post = post

  );
  console.log(this.post);

  }
  

  
  postImageURL(imageData: string): string {
    return `data:image/jpeg;base64,${imageData}`;
  }

}
