import { CategProduit } from "./CategProduit";
import { Nutrition } from "./Nutrition";

export class Produit {
    id!:number;
      nom!:string;
      description!:string;
      prix!:number;
      ingredient!:string;
      img!:string;
      categProduit!:CategProduit ;
      user!:number;
      nutrition!:Nutrition;
      image_data!:ArrayBuffer;
      imageUrl!: string;
      imageBase64!:String;
      quantite!:number;
      subtotal!:number;
  }