import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/Produit';
import { RepasProduitService } from 'src/app/repasProduit.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produit-shop',
  templateUrl: './produit-shop.component.html',
  styleUrls: ['./produit-shop.component.css'],
  providers:[RepasProduitService]
})

export class ProduitShopComponent implements OnInit{
  produit!: Produit[];
  showDetails = false;


  constructor(private repasProduit:RepasProduitService, private R:Router){}
  ngOnInit(){
    this.repasProduit.getAllProduit().subscribe(data => {
      this.produit = data;
      console.log(this.produit);
    });
  }

  showDetailsFn() {
    this.showDetails = true;
  }

  hideDetailsFn() {
    this.showDetails = false;
  }

  goToDashboard(){
    this.R.navigate(['/produit/fournisseur']);
  }


}
