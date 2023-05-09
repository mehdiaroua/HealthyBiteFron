import { Ingredient } from './ingredient.model';

export class Recette {
  id?: number;
  nom?: string;
  ingredients?: Ingredient[] = [];
}
