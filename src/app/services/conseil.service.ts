import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conseil } from '../Models/RepasProduit/Models/RecetteConseil/conseil.model';
import { CrudService } from './generics/crud-service.service';

@Injectable({
  providedIn: 'root',
})
export class ConseilService extends CrudService<Conseil, number> {
  baseUrl = 'http://localhost:8080/conseil';

  constructor(private http: HttpClient) {
    super(http, 'http://localhost:8080/conseil');
  }

  public addConseilToObjectif(objectifId: number, conseil: Conseil) {
    return this.http.post(`${this.baseUrl}/${objectifId}/conseils`, conseil);
  }

  public getConseilPerObjectif(objectifId: number) {
    return this.http.get(`${this.baseUrl}/objectif/${objectifId}/conseils}`);
  }

  public conseilRecommendations() {
    return this.http.get(`${this.baseUrl}/user/{userId}/recommend`);
  }
}
