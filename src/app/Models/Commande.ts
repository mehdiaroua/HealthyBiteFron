import { EtatCommande } from "./EtatCommande"
import { Produit } from "./Produit";

export class Commande {
    id!:number;
    etatCommande!: EtatCommande;
    produit!:Produit;

}