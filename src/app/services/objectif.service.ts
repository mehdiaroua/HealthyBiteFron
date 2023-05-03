import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Objectif } from '../Models/RepasProduit/Models/RecetteConseil/objectif.model';
import { CrudService } from './generics/crud-service.service';

@Injectable({
  providedIn: 'root',
})
export class ObjectifService extends CrudService<Objectif, number> {
  baseUrl = 'http://localhost:8080/objectif';
  constructor(private http: HttpClient) {
    super(http, 'http://localhost:8080/objectif/');
  }
  public addObjectifToUser(userId: number, objectif: Objectif) {
    return this.http.post(`${this.baseUrl}/user/${userId}/objectifs`, objectif);
  }

  public getObjectifsPerUser(userId: number) {
    return this.http.get(`${this.baseUrl}/user/${userId}/objectifs`);
  }
}
