import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Nutrition } from 'src/app/Models/RepasProduit/Nutrition';
import { Produit } from 'src/app/Models/RepasProduit/Produit';
import { RepasProduitService } from 'src/app/repasProduit.service';

@Component({
  selector: 'app-addnutrition',
  templateUrl: './addnutrition.component.html',
  styleUrls: ['./addnutrition.component.css'],
  providers:[MessageService]
})
export class AddnutritionComponent implements OnInit{
  nutrition: Nutrition = {
    id: 0,
    energies: 0,
    acides: 0,
    glucides: 0,
    sucres: 0,
    fibre: 0,
    calories: 0,
    proteines: 0,
    lipides: 0,
    sel: 0,

  };


  produits!: Produit[];
  selectedProduit!: Produit;
constructor(private repasService:RepasProduitService,private router:Router,private route: ActivatedRoute, private messageService:MessageService){}
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.repasService.getProduitById(id).subscribe(produit => {
      this.selectedProduit = produit;
    });
  }



  addNutritionToProduit(nutrition: Nutrition, produitId: number) {
    this.repasService.addNutritionToProduit(nutrition, produitId)
      .subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content' });
        this.router.navigate(['/produit/fournisseur', this.selectedProduit.id]);
      });
  }
}



