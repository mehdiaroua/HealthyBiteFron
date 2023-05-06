import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../Service/reclamation.service';
import { Reclamation } from '../Models/ReclamationEtReponse/Reclamation';

@Component({
  selector: 'app-reclamation-user',
  templateUrl: './reclamation-user.component.html',
  styleUrls: ['./reclamation-user.component.css']
})
export class ReclamationUserComponent implements OnInit {

  reclamations!: Reclamation[];

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations() {
    const userId = 123; // ajustez l'ID utilisateur en fonction de vos besoins
    this.reclamationService.getAllReclamationsByUser(userId).subscribe(data => {
      this.reclamations = data;
    });
  }

}