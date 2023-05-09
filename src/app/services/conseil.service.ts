import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conseil } from '../Models/RepasProduit/Models/RecetteConseil/conseil.model';
import { CrudService } from './generics/crud-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConseilService extends CrudService<Conseil, number> {
  baseUrl = 'http://localhost:8080/conseil';

  constructor(private http: HttpClient) {
    super(http, 'http://localhost:8080/conseil');
  }

  public addConseilToObjectif(objectifId: number, conseil: Conseil) {
    return this.http.post(`${this.baseUrl}/objectif/${objectifId}`, conseil);
  }

  public getConseilPerObjectif(objectifId: number): Observable<Conseil[]> {
    return this.http.get<Conseil[]>(
      `${this.baseUrl}/objectif/${objectifId}/conseils}`
    );
  }

  public conseilRecommendations(userId: number): Observable<Conseil[]> {
    return this.http.get<Conseil[]>(`${this.baseUrl}/user/${userId}/recommend`);
  }
}
