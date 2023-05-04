import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repas } from 'src/app/Models/RepasProduit/Repas';

import { RepasProduitService } from 'src/app/repasProduit.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[RepasProduitService]
})
export class ShopComponent implements OnInit{
  repas!:Repas[];
constructor(private repasProduit:RepasProduitService, private R:Router){}
  ngOnInit(){

    this.repasProduit.getAllRepas().subscribe(data => {
      this.repas = data;
      console.log(this.repas);
    });
     }

     showDetails(id : number){
      this.R.navigate(['products/productDetails', id]);
    }

    gotoDashboard(){
      this.R.navigate(['repas/restaurant']);
    }

}
