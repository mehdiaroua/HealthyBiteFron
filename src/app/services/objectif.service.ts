import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';
import { Objectif } from '../Models/RepasProduit/Models/RecetteConseil/objectif.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService extends ResourceService<Objectif> {
  baseUrl = "http://localhost:8080/objectif"
  constructor(private http: HttpClient) {
    super(http, Objectif, 'http://localhost:8080/objectif/');
  }
  public addObjectifToUser(userId: number, objectif: Objectif) {
    return this.http.post(`${this.baseUrl}/user/${userId}/objectifs`, objectif);
  }

  public getObjectifsPerUser(userId: number) {
    return this.http.get(`${this.baseUrl}/user/${userId}/objectifs`)
  }
}
