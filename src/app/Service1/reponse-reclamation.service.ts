import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReponseReclamation } from '../Models/ReclamationEtReponse/ReponseReclamation';

@Injectable({
  providedIn: 'root'
})
export class ReponseReclamationService {
  listRponse: ReponseReclamation[] = [];

  readonly URL = "http://localhost:8080/api/test/"

  constructor(private httpClient: HttpClient) { }
  getAllReponse() {
    return this.httpClient.get<ReponseReclamation[]>(this.URL + "retrieveAllReponseReclamation");
  }

  ajouterReponseReclamation(idReclamation: number, reponseReclamation: ReponseReclamation ): Observable<ReponseReclamation> {
    const url = `${this.URL}addReponseReclamation/${idReclamation}`
    return this.httpClient.post<ReponseReclamation>(url, reponseReclamation);
  }
  deleteReponseReclamation(reponse: ReponseReclamation) {
    return this.httpClient.delete<ReponseReclamation>(`${this.URL}deleteReponseReclamation/${reponse.idReponseReclamation}`)
      .pipe(map(() => {
        return this.listRponse.filter(r => r !== reponse);
      }));
  }
 
  public findById(id: number) {
    return this.httpClient.get(this.URL + 'retrieveReponseReclamationById/' + id);
  }
  public update(reponse: ReponseReclamation) {
    return this.httpClient.put(this.URL + 'updateReponseReclamation', reponse);
  }
  


  
  // deletePost(post: Post) {
  //   return this.httpClient.delete<Post>(
  //     ${ environment.api }test / deletePost / ${ post.id }
  //   );
  // }

  }
