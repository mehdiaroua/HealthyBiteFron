import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/Models/RepasProduit/Models/RecetteConseil/ingredient.model';
import { Recette } from 'src/app/Models/RepasProduit/Models/RecetteConseil/recette.nodel';
import { IngredientService } from 'src/app/services/ingredient.service';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-details-recette',
  templateUrl: './details-recette.component.html',
  styleUrls: ['./details-recette.component.css'],
})
export class DetailsRecetteComponent implements OnInit {
  public recette!: Recette;
  private recetteId!: number;
  public ingredients: Ingredient[] = [];
  constructor(
    private recetteService: RecetteService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.recetteId = this.route.snapshot.params['id'];
    this.recetteService
      .getById(this.recetteId)
      .subscribe((data) => (this.recette = data));

    this.ingredientService
      .getIngredientsByRecetteId(this.recetteId)
      .subscribe((data) => {
        this.recette.ingredients = [];
        this.recette.ingredients = data;
      });
  }
}
