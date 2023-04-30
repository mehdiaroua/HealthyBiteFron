import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './models/Livraison';
import { EtatCommande } from './models/EtatCommande';
import { AdresseLivraison } from './models/AdresseLivraison';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly URL = "http://localhost:*/"

  constructor(private httpClient: HttpClient) { }


  addLivraison(etat : EtatCommande, adresse: AdresseLivraison, time: string): Observable<Livraison> {
    const livraison = {
      etat: etat,
      adresseLivraison: adresse,
      dateLivraison: time
    };
    
    return this.httpClient.post<Livraison>(`${this.URL}test/addLivraison`, livraison);
  }
 // Get All Livraison - Read
  getAllLivraison(){
  return this.httpClient.get<Livraison[]>(`${this.URL}test/getAllLivraison`)
 }
 updateLivraison(liv:Livraison){
  return this.httpClient.post<Livraison>(`${this.URL}test/updateLivraison`, liv);
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
