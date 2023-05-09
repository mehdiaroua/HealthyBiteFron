import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReponseReclamationService } from '../service/reponse-reclamation.service';
import { ReponseReclamation } from '../Models/ReclamationEtReponse/ReponseReclamation';

@Component({
  selector: 'app-add-reponse-reclamation',
  templateUrl: './add-reponse-reclamation.component.html',
  styleUrls: ['./add-reponse-reclamation.component.css']
})
export class AddReponseReclamationComponent implements OnInit {

  idReclamation!: number;
  reponseReclamation: ReponseReclamation = new ReponseReclamation();

  constructor(
    private route: ActivatedRoute,
    private rpS: ReponseReclamationService,
    private R: Router
  ) { }

  ngOnInit(){
    this.idReclamation = this.route.snapshot.params['idReclamation'];
  }

  ajouterReponseReclamation() {
    this.rpS.ajouterReponseReclamation(this.idReclamation, this.reponseReclamation).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.R.navigate(['Reclamations']);

    
  }
}
