import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repas } from './models commandeLivraison/RepasProduit/Repas';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepasProduitService {
  listRepas:Repas[]=[];
   id!:number
  constructor(private httpClient: HttpClient) { }


  addRepasAndImage(nom: string, description: string, prix: number, ingredient: string, allergene: string, objectifType: string, categRepas: string, image: File): Observable<Repas> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('prix', prix.toString());
    formData.append('ingredient', ingredient);
    formData.append('allergene', allergene);
    formData.append('objectifType', objectifType);
    formData.append('categRepas', categRepas);
    //formData.append('user', user);
    formData.append('image', image, image.name);

    return this.httpClient.post<Repas>(`${environment.api}test/addRepasWithImg`, formData);
  }

  updateRepasAndImage(id: number, nom: string, description: string, prix: number, ingredient: string, allergene: string, objectifType: string, categRepas: string, image: File): Observable<Repas> {
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



}
