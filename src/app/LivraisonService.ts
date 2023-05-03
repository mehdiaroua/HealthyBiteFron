import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './Models/Livraison';
import { EtatCommande } from './Models/EtatCommande';
import { AdresseLivraison } from './Models/AdresseLivraison';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly URL = "http://localhost:8080/api/test/"

  constructor(private httpClient: HttpClient) { }


  addLivraison(etat : EtatCommande, adresse: AdresseLivraison, date: string ): Observable<any> {
    const livraison = {
      etat: etat,
      adresseLivraison: adresse,
      dateLivraison: date
    };
          return this.httpClient.post<any>(`${this.URL}addLivraison`, livraison);
      }
   
  
  //   addLivraison(etat : EtatCommande, adresse: AdresseLivraison, currentLocation: string,lastUpdatedAt : Date ,deliveryTimeSlot:  string , alternateAddress:  string ,collectionPoint:  string, expressDeliveryFee:  string  ): Observable<any> {
    
  //       const livraison = {
  //         etat: etat,
  //         adresseLivraison: adresse,
  //         deliveryTimeSlot:  deliveryTimeSlot ,
             
       
  //       currentLocation : currentLocation  ,
  //       lastUpdatedAt : lastUpdatedAt ,
  //      alternateAddress:  alternateAddress ,
  //      collectionPoint:  collectionPoint ,
  //      expressDeliveryFee:  expressDeliveryFee 
  //       };
       
  //       return this.httpClient.post<any>(`${this.URL}addLivraison`, livraison);
  //     }
  addCollectionPoint(collectionPoint: String): Observable<any> {
    const liv = {
      col: collectionPoint
    
    };
      return this.httpClient.post<any>(`${this.URL}addLivraison`, liv);
  }
 // Get All Livraison - Read
  getAllLivraison(){
  return this.httpClient.get<Livraison[]>(`${this.URL}getAllLivraison`)
 }
 updateLivraison(liv:Livraison){
  return this.httpClient.post<Livraison>(`${this.URL}updateLivraison`, liv);
}

  // Delete Livraison - Delete
  deleteLivraisonById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}deleteLivraisonById/${id}`);
  }
    // Get Livraison by Id - Read
    getLivraisonById(id: number): Observable<Livraison> {
      return this.httpClient.get<Livraison>(`${this.URL}getLivraisonById/${id}`);
    }
  

}
