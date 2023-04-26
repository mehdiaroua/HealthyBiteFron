import { AdresseLivraison } from "./AdresseLivraison"
import { EtatCommande } from "./EtatCommande"

export interface Livraison {
    id:number
    etatCommande: EtatCommande
    
   adresseLivraison : AdresseLivraison
    status : string 
  currentLocation :  string 
     lastUpdatedAt : Date 
     deliveryTimeSlot:  string 
    alternateAddress:  string 
     collectionPoint:  string 
    expressDeliveryFee:  string 

   
    
   

}