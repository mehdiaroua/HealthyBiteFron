import { Recette } from "./recette.model";


export interface Ingredient {
  id?: number;
  nom?: string;
  quantite?: number;
  calories?: number;
  recette?: Recette;
}
