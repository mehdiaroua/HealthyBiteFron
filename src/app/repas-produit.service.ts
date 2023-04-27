import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repas } from './Models/RepasProduit/Repas';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepasProduitService {
  listRepas:Repas[]=[];
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

  updateRepas(rep:Repas){
    return this.httpClient.post<Repas>(environment.api+"test/updateRepas",rep);
  }

  getRepasById(id:number){
    return this.httpClient.get<Repas>(environment.api+"test/getRepasById"+`/${id}`);
  }

 getAllRepas(){
  return this.httpClient.get<Repas[]>(environment.api+"test/getAllRepas")
 }

 deleteRepas(rep:Repas){
  return this.httpClient.delete<Repas>(environment.api+"test/deleteRepas");
 }
 getRepasByUserId(){
  return this.httpClient.get<Repas>(environment.api+"test/getRepasByUserId");
 }



}
