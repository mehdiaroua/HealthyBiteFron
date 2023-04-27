import { Component, OnInit } from '@angular/core';
import { RepasProduitService } from '../repas-produit.service';
import { Repas } from '../Models/RepasProduit/Repas';
import { RepasWithImageUrl } from '../Models/RepasProduit/RepasWithImageUrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RepasProduitService]
})
export class HomeComponent implements OnInit{
  repas!:Repas[];
constructor(private repasProduit:RepasProduitService){}

  ngOnInit(){

    this.repasProduit.getAllRepas().subscribe(data => {
      this.repas = data;
      console.log(this.repas);
    });



     }

}
