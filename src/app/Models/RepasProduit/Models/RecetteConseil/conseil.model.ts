import { ResourceModel } from "src/app/Models/resource-model.model";
import { Objectif } from "./objectif.model";

export class Conseil extends ResourceModel<Conseil> {
    public description?: string;
    public objectif?: Objectif;
    
    constructor(model?: Partial<Conseil>) {
        super(model);
    }

}