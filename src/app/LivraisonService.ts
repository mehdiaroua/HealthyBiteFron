import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './Models/Livraison';
import { EtatCommande } from './Models/EtatCommande';
import { AdresseLivraison } from './Models/AdresseLivraison';
import { StorageService } from './service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  readonly URL = "http://localhost:8080/api/test/"
  user!: any;
  constructor(private httpClient: HttpClient, private storage: StorageService) { }


  addLivraison(etat : EtatCommande, adresse: AdresseLivraison, date: string , collectionPoint:string): Observable<any> {
    this.user = this.storage.getUser();
    const livraison = {
      etat: etat,
      adresseLivraison: adresse,
      dateLivraison: date,
      collectionPoint: collectionPoint,
      user : this.user.id
     
    };
          return this.httpClient.post<any>(`${this.URL}addLivraison`, livraison);
      }
   
  
 
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
