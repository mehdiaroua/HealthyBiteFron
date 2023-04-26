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

 
  addRepas(repas: Repas): Observable<Repas> {
    return this.httpClient.post<Repas>(`${environment.api}test/addRepas`, repas);
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
