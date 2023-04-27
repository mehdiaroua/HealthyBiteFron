import {ObjectifType} from './ObjectifType'
import { CategRepas } from './CategRepas';
import { Nutrition } from './Nutrition';
export class Repas {
    id!:number;
    nom!:string;
    description!:string;
    prix!:number;
    ingredient!:string;
    allergene!:string;
    objectifType!:ObjectifType;
    img!:string;
    categorieRepas!:CategRepas;
    //user!:User;
    nutrition!:Nutrition;
    image_data!:ArrayBuffer;
    imageUrl!: string;
    imageBase64!:String;




}
