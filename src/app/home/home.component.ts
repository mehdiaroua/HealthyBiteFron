import { Component, OnInit } from '@angular/core';
import { RepasProduitService } from '../repasProduit.service';
import { Repas } from '../Models/Repas';
import { RepasWithImageUrl } from '../Models/RepasWithImageUrl';
import { Produit } from '../Models/Produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RepasProduitService]
})
export class HomeComponent implements OnInit{
  repas!:Repas[];
  produit!:Produit[];
constructor(private repasProduit:RepasProduitService){}

  ngOnInit(){

    this.repasProduit.getAllRepas().subscribe(data => {
      this.repas = data;
      console.log(this.repas);
    });


    this.repasProduit.getAllProduit().subscribe(data => {
      this.produit = data;
      console.log(this.repas);
    });


     }

}