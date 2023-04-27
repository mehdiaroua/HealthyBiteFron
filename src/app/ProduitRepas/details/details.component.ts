import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repas-produit.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  repas!: Repas;
  constructor(private repasProduit:RepasProduitService, private route: ActivatedRoute){}


ngOnInit(){
  const id = +this.route.snapshot.params['id'];
  this.repasProduit.getRepasById(id).subscribe(
    repas => this.repas = repas
  );
}


}
