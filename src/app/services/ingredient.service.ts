import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../Models/RepasProduit/Models/RecetteConseil/ingredient.model';
import { CrudService } from './generics/crud-service.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService extends CrudService<Ingredient, number> {
  baseUrl = 'http://localhost:8080/ingredient';
  constructor(private http: HttpClient) {
    super(http, 'http://localhost:8080/ingredient');
  }

  public addIngredientToRecette(recetteId: number, ingredient: Ingredient) {
    return this.http.post(
      `${this.baseUrl}/recette/${recetteId}/ingredients`,
      ingredient
    );
  }

  public getRecetteIngredients(recetteId: number) {
    return this.http.get(`${this.baseUrl}/recetteIngredients?${recetteId}`);
  }

  public getIngredientsByRecetteId(
    recetteId: number
  ): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(
      `${this.baseUrl}/recette/${recetteId}/ingredients`
    );
  }
}