import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutrition } from 'src/app/Models/Nutrition';
import { Repas } from 'src/app/Models/Repas';
import { RepasProduitService } from 'src/app/repasProduit.service';

@Component({
  selector: 'app-add-nutr-repas',
  templateUrl: './add-nutr-repas.component.html',
  styleUrls: ['./add-nutr-repas.component.css']
})
export class AddNutrRepasComponent {
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

  produits!: Repas[];
  selectedProduit!: Repas;

  constructor(private repasService:RepasProduitService,private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.repasService.getRepasById(id).subscribe(produit => {
      this.selectedProduit = produit;
    });
  }

    addNutritionToRepas(nutrition: Nutrition, produitId: number) {
      this.repasService.addNutritionToProduit(nutrition, produitId)
        .subscribe(() => {
          this.router.navigate(['/repas/restaurant', this.selectedProduit.id]);
        });
    }
  }









