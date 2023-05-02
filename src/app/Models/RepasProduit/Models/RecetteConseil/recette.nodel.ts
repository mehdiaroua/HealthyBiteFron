import { ResourceModel } from 'src/app/Models/resource-model.model';
import { Ingredient } from './ingredient.model';

export class Recette extends ResourceModel<Recette> {
  public nom?: string;

  public ingredients?: Ingredient[] = [];

  constructor(model?: Partial<Recette>) {
    super(model);
  }
}
