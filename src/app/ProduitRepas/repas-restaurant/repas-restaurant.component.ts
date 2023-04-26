import { Component, OnInit } from '@angular/core';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repas-produit.service';

@Component({
  selector: 'app-repas-restaurant',
  templateUrl: './repas-restaurant.component.html',
  styleUrls: ['./repas-restaurant.component.css']
})
export class RepasRestaurantComponent implements OnInit{


  repas!: Repas[];
  repasSelected!: Repas;
  editMode = false;

  constructor(private repasService:RepasProduitService){}

  ngOnInit(): void {
    this.getAllRepas();
  }

  getAllRepas(): void {
    this.repasService.getAllRepas()
      .subscribe(repas => this.repas = repas);
  }

  deleteRepas(repas: Repas): void {
    this.repas = this.repas.filter(r => r !== repas);
    this.repasService.deleteRepas(repas).subscribe();
  }

  updateRepas(repas: Repas): void {
    this.repasService.updateRepas(repas).subscribe(updatedRepas => {
      const index = this.repas.findIndex(r => r.id === updatedRepas.id);
      if (index !== -1) {
        this.repas[index] = updatedRepas;
      }
    });
  }



}
