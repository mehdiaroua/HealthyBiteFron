import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { AddReclamationComponent } from 'src/app/add-reclamation/add-reclamation.component';

import { RepasProduitService } from 'src/app/repasProduit.service';
import { StorageService } from 'src/app/Service1/storage.service';
import { UserService } from 'src/app/Service1/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[RepasProduitService,DialogService]
})
export class ShopComponent implements OnInit{
  repas!:Repas[];
  ref!: DynamicDialogRef;
  repasProposes!: Repas[];
  user!:any;
   exchangeRate: any;
  selectedCurrency!: string;

  public targetCurrency!: string;
  public convertedPrice!: number;
constructor(private repasProduit:RepasProduitService, private R:Router,public dialogService: DialogService, private userService:StorageService){}
  ngOnInit(){
    this.user = this.userService.getUser();
   /* this.repasProduit.getAllRepas().subscribe(data => {
      this.repas = data;
      console.log(this.repas);
    });*/
    this.proposerRepasSelonObjectifEtActivite();
     }


     public convertCurrency(targetCurrency: string) {
      this.targetCurrency = targetCurrency;
      this.repasProduit.getExchangeRate('TND', targetCurrency)
        .subscribe(response => {
          const exchangeRate = response.rates[targetCurrency];
          // Remplacez '10' par le prix initial que vous souhaitez convertir
          this.convertedPrice = 10 * exchangeRate;
        });
    }





     showDetails(id : number){
      this.R.navigate(['products/productDetails', id]);
    }

    gotoDashboard(){
      this.R.navigate(['repas/restaurant']);
    }

    proposerRepasSelonObjectifEtActivite() {
      this.user = this.userService.getUser().id;
      this.repasProduit.proposerRepasSelonObjectifEtActivite(this.user)
        .subscribe(
          data => {
            this.repasProposes = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }





}
