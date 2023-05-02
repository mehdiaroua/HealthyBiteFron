import { ResourceModel } from "src/app/Models/resource-model.model";
import { Recette } from "./recette.nodel";

export class Ingredient extends ResourceModel<Ingredient> {
    public nom?: string;

    public quantite?: number;

    public calories?: number;
    
    public recette?: Recette;

    constructor(model?: Partial<Ingredient>) {
        super(model);
    }

}