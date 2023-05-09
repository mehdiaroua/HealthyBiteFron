import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './Models/Livraison';
import { EtatCommande } from './Models/EtatCommande';
import { AdresseLivraison } from './Models/AdresseLivraison';
import { Commande } from './Models/Commande';
import { User } from './Class/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user!: User;
  readonly URL = "http://localhost:8080/api/test/"
  constructor(private httpClient: HttpClient) { }


  addCommande(etat : EtatCommande, Date: Date, total: number): Observable<any> {
    const commande = {
      etat: etat,
      dateCommande:  Date,
      user : this.user.id,
      total: total,
    };
   
    return this.httpClient.post<any>(`${this.URL}addCommande`, Commande);
  }

  

}
