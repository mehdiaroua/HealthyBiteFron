import { Component, OnInit } from '@angular/core';
import { Repas } from 'src/app/Models/RepasProduit/Repas';

import { RepasProduitService } from 'src/app/repas-produit.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[RepasProduitService]
})
export class ShopComponent implements OnInit{
  repas!:Repas[];
constructor(private repasProduit:RepasProduitService){}
  ngOnInit(){

    this.repasProduit.getAllRepas().subscribe(data => {
      this.repas = data;
      console.log(this.repas);
    });



     }

}
