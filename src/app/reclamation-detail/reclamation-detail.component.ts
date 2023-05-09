import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reclamation } from '../Models/ReclamationEtReponse/Reclamation';
import { ReclamationService } from '../Service/reclamation.service';

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-detail.component.html',
  styleUrls: ['./reclamation-detail.component.css']
})
export class ReclamationDetailComponent implements OnInit {
  reclamation!: any;
  constructor(private actR: ActivatedRoute,private rec :ReclamationService, private route: ActivatedRoute) { }
  
  ngOnInit(){
    const id = +this.route.snapshot.params['idReclamation'];
    this.rec.findById(id).subscribe(
      reclamation => this.reclamation = reclamation

    );
    console.log(this.reclamation);

  }
}
