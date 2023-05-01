import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repas } from './Models/RepasProduit/Repas';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Produit } from './Models/RepasProduit/Produit';

@Injectable({
  providedIn: 'root'
})
export class RepasProduitService {
  listRepas:Repas[]=[];
  listProduit:Produit[]=[];
   id!:number
  constructor(private httpClient: HttpClient) { }


  addRepasAndImage(nom: string, description: string, prix: number, ingredient: string, allergene: string, objectifType: string, categRepas: string, image: File,user:number): Observable<Repas> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix.toString());
    formData.append('ingredient', ingredient);
    formData.append('allergene', allergene);
    formData.append('objectifType', objectifType);
    formData.append('categRepas', categRepas);
    formData.append('image', image, image.name);
    formData.append('user', user.toString());

    return this.httpClient.post<Repas>(`${environment.api}test/addRepasWithImg`, formData);
  }

  updateRepasAndImage(id: number, nom: string, description: string, prix: number, ingredient: string, allergene: string, objectifType: string, categRepas: string, image: File,user:number): Observable<Repas> {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix.toString());
    formData.append('ingredient', ingredient);
    formData.append('allergene', allergene);
    formData.append('objectifType', objectifType);
    formData.append('categRepas', categRepas);
    formData.append('image', image, image.name);
    formData.append('user', user.toString());
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.httpClient.put<Repas>(`${environment.api}test/updateRepasWithImg`, formData, { headers });
  }

  getRepasById(id:number){
    return this.httpClient.get<Repas>(environment.api+"test/getRepasById"+`/${id}`);
  }

 getAllRepas(){
  return this.httpClient.get<Repas[]>(environment.api+"test/getAllRepas")
 }

 deleteRepas(repas: Repas): Observable<any> {
  return this.httpClient.delete(`${environment.api}test/deleteRepas`, {body: repas});
}
 getRepasByUserId(id:number){
  return this.httpClient.get<Repas[]>(environment.api+"test/getRepasByUserId"+`/${id}`);
 }













 /////////////////////////***********************************PRODUITS *********************************** */



  addProduitAndImage(nom: string, description: string, prix: number, ingredient: string, categProduit: string, image: File): Observable<Produit> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix.toString());
    formData.append('ingredient', ingredient);
    formData.append('categProduit', categProduit);
   // formData.append('user', user);
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





