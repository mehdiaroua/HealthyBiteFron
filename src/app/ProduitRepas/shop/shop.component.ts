import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { AddReclamationComponent } from 'src/app/add-reclamation/add-reclamation.component';

import { RepasProduitService } from 'src/app/repasProduit.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[RepasProduitService,DialogService]
})
export class ShopComponent implements OnInit{
  repas!:Repas[];
  ref!: DynamicDialogRef;
constructor(private repasProduit:RepasProduitService, private R:Router,public dialogService: DialogService){}
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
