import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './models/Livraison';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly URL = "http://localhost:*/"

  constructor(private httpClient: HttpClient) { }


///// NNNNNAAAAADDDDDAAAAA ccrrrrrruuuuuuudddddddd /////////
  // Add Livraison - Create
  addLivraison(livraison: Livraison): Observable<Livraison> {
    return this.httpClient.post<Livraison>(`${this.URL}addLivraison`, livraison);
  }

  // Get Livraison by Id - Read
  getLivraisonById(id: number): Observable<Livraison> {
    return this.httpClient.get<Livraison>(`${this.URL}getLivraisonById/${id}`);
  }

  // Get All Livraison - Read
  getAllLivraison(): Observable<Livraison[]> {
    return this.httpClient.get<Livraison[]>(`${this.URL}getAllLivraison`);
  }

  // Update Livraison - Update
  updateLivraison(livraison: Livraison): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}updateLivraison`, livraison);
  }

  // Delete Livraison - Delete
  deleteLivraisonById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}deleteLivraisonById/${id}`);
  }


}
