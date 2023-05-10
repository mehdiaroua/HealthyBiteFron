import { Component, OnInit } from '@angular/core';
import { RepasProduitService } from '../repasProduit.service';
import { Repas } from '../Models/RepasProduit/Repas';
import { RepasWithImageUrl } from '../Models/RepasProduit/RepasWithImageUrl';
import { Produit } from '../Models/RepasProduit/Produit';
import { ProduitService } from '../produit.service';
import { PostService } from '../post.service';
import { Post } from '../Models/PostComment/Post';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RepasProduitService]
})
export class HomeComponent implements OnInit{
  repas!:Repas[];
  produit!: Produit[];
  posts: Post[] = [];
  public imagePath = '/assets/images/food.png';

  constructor(private sanitizer: DomSanitizer,private postService: PostService, private repasProduit:RepasProduitService){}

  ngOnInit() {
    

    this.repasProduit.getAllRepas().subscribe(data => {
      this.repas = data;
      console.log(this.repas);
    });
    


    this.repasProduit.getAllProduit().subscribe(data => {
      this.produit = data;
      console.log(this.repas);
    });

    

this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  postImageURL(imageData: string): string {
    return `data:image/jpeg;base64,${imageData}`;
  }
public backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imagePath})`);

}
