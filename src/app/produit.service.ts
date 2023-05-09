import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from './Models/RepasProduit/Produit';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  listProduit:Produit[]=[];
  id!:number
  constructor(private httpClient: HttpClient) { }


  addProduitAndImage(nom: string, description: string, prix: number, ingredient: string, categProduit: string, image: File): Observable<Produit> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix.toString());
    formData.append('ingredient', ingredient);
    formData.append('categProduit', categProduit);
    //formData.append('user', user);
    formData.append('image', image, image.name);

    return this.httpClient.post<Produit>(`${environment.api}test/addProduitWithImg`, formData);
  }

  updateProduitAndImage(id: number, nom: string, description: string, prix: number, ingredient: string, categProduit: string, image: File): Observable<Produit> {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix.toString());
    formData.append('ingredient', ingredient);
    formData.append('categProduit', categProduit);
    formData.append('image', image, image.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.httpClient.put<Produit>(`${environment.api}test/updateProduitWithImg`, formData, { headers });
  }

  getProduitById(id:number){
    return this.httpClient.get<Produit>(environment.api+"test/getProduitById"+`/${id}`);
  }

 getAllProduit(){
  return this.httpClient.get<Produit[]>(environment.api+"test/getAllProduitWithImage")
 }

 deleteProduit(Produit: Produit): Observable<any> {
  return this.httpClient.delete(`${environment.api}test/deleteProduit`, {body: Produit});
}
 getProduitByUserId(id:number){
  return this.httpClient.get<Produit[]>(environment.api+"test/getProduitByUserId"+`/${id}`);
 }





}
