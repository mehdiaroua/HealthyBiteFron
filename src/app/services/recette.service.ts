import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from '../Models/RepasProduit/Models/RecetteConseil/recette.model';
import { CrudService } from './generics/crud-service.service';

@Injectable({
  providedIn: 'root',
})
export class RecetteService extends CrudService<Recette, number> {
  baseUrl = 'http://localhost:8080/recette';
  constructor(private http: HttpClient) {
    super(http, 'http://localhost:8080/recette');
  }
}
