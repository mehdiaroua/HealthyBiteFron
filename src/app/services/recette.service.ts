import { Injectable } from '@angular/core';
import { Recette } from '../Models/RepasProduit/Models/RecetteConseil/recette.nodel';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
export class RecetteService extends ResourceService<Recette> {
  baseUrl = 'http://localhost:8080/recette';
  constructor(private http: HttpClient) {
    super(http, Recette, 'http://localhost:8080/recette');
  }
}
