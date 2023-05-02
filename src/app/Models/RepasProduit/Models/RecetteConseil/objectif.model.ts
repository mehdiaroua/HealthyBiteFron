import { ResourceModel } from "src/app/Models/resource-model.model";
import { TypeActivite } from "./type-activite.enum";
import { Conseil } from "./conseil.model";

export class Objectif extends ResourceModel<Objectif> {
    public poidDepart?: number;
    public poidActuel?: number;
    public taille?: number;
    public objectifPoid?: number;
    public typeActivite?: TypeActivite;

    public user: any;
    public conseils?: Conseil[];

    
    constructor(model?: Partial<Objectif>) {
        super(model);
    }

}