import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../Models/ReclamationEtReponse/Reclamation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly URL = "http://localhost:8080/"

  listReclamation: Reclamation[] = [];

  constructor(private httpClient: HttpClient) { }
  getAllReclamation() {
    return this.httpClient.get<Reclamation[]>(this.URL + "api/test/retrieveAllReclamation");
  }

  addReclamtion(reclamation: Reclamation){
    return this.httpClient.post(this.URL + "api/test/addReclamation", reclamation);
  }

  getReclamation(idReclamation: number) {
    return this.httpClient.get<Reclamation>(this.URL + "api/test/retrieveReclamationById" + `/${idReclamation}`);
  }

  archiveReclamationsNonTraitees(): Observable<any> {
    return this.httpClient.put(this.URL + "api/test/archiverReclamationNonTraitee", null);
  }
  countReclamationsByMonth(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL + "api/test/reclamations/mois");
  }


  public findById(id: number) {
    return this.httpClient.get(this.URL + 'api/test/retrieveReclamationById/' + id);
  }
  public update(reclamation: Reclamation) {
    return this.httpClient.put(this.URL + 'api/test/updateReclamation', reclamation);
  }


  
  public assignRepasToReclamation(reclamation: Reclamation, idRepas: number): Observable<Reclamation> {
    const url = `${this.URL}api/test/assignRepasToReclamation/${idRepas}`
    return this.httpClient.post<Reclamation>(url, reclamation);
  }
  public assignProduitToReclamation(reclamation: Reclamation, idProduit: number): Observable<Reclamation> {
    const url = `${this.URL}api/test/assignProduitToReclamation/${idProduit}`
    return this.httpClient.post<Reclamation>(url, reclamation);
  }

  deleteReclamation(reclamation: Reclamation) {
    return this.httpClient.delete<Reclamation>(`${this.URL}api/test/deleteReclamation/${reclamation.idReclamation}`)
      .pipe(map(() => {
        return this.listReclamation.filter(r => r !== reclamation);
      }));
  }
}
