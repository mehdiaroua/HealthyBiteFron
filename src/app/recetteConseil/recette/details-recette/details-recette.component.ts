import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/Models/RepasProduit/Models/RecetteConseil/ingredient.model';
import { Recette } from 'src/app/Models/RepasProduit/Models/RecetteConseil/recette.model';
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
  public showAddIngredient: boolean = false;
  public ingredientForm!: UntypedFormGroup;
  public editMode: boolean = false;
  public subjectForUpdateIngredient: Ingredient = {};
  constructor(
    private recetteService: RecetteService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder
  ) {}
  ngOnInit(): void {
    this.recetteId = this.route.snapshot.params['id'];
    this.loadRecette();
    this.initIngrendientForm();
  }
  initIngrendientForm() {
    this.ingredientForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      calories: [null, [Validators.required]],
      quantite: [null, [Validators.required]],
    });
  }

  loadRecette() {
    this.recetteService.getById(this.recetteId).subscribe((data) => {
      this.recette = data;
      this.ingredientService
        .getIngredientsByRecetteId(this.recetteId)
        .subscribe((data) => {
          this.recette.ingredients = data;
        });
    });
  }

  back() {
    this.router.navigateByUrl('/recette');
  }

  onShowAddIngrient() {
    this.showAddIngredient = true;
  }

  onSubmitIngredient() {
    const ingredientToSave: Ingredient = {
      nom: this.ingredientForm.get('nom')?.value,
      quantite: this.ingredientForm.get('quantite')?.value,
      calories: this.ingredientForm.get('calories')?.value,
    };

    this.ingredientService
      .addIngredientToRecette(this.recetteId, ingredientToSave)
      .subscribe((resultat) => {
        this.loadRecette();
        this.showAddIngredient = false;
      });
  }
  onCancelAddIngredient() {
    this.showAddIngredient = false;
  }

  onShowEditIngredient(subjectId?: number) {
    this.editMode = true;

    this.subjectForUpdateIngredient = <Ingredient>(
      this.recette.ingredients?.filter((ing) => ing.id == subjectId!)[0]
    );
  }
  deleteIngredient(id?: number) {
    this.ingredientService.delete(id!).subscribe(() => {
      this.loadRecette();
    });
  }
  editIngredient() {
    this.ingredientService
      .update(
        this.subjectForUpdateIngredient.id!,
        this.subjectForUpdateIngredient
      )
      .subscribe(() => {
        this.loadRecette();
        this.editMode = false;
        this.subjectForUpdateIngredient = {};
      });
  }
  onCancelEditIngredient() {
    this.subjectForUpdateIngredient = {};
    this.editMode = false;
    this.loadRecette();
  }
}
