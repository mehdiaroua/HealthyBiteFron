import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutrition } from 'src/app/Models/RepasProduit/Nutrition';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repasProduit.service';
import { StorageService } from 'src/app/Service1/storage.service';

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
  user!:any;

  constructor(private repasService:RepasProduitService,private router:Router,private route: ActivatedRoute,private userService: StorageService){}

  ngOnInit(): void {
    this.user = this.userService.getUser();
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
        location.reload();
    }
  }









