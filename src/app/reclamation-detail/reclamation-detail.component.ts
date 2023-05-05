import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-detail.component.html',
  styleUrls: ['./reclamation-detail.component.css']
})
export class ReclamationDetailComponent implements OnInit {

  constructor(private actR: ActivatedRoute) { }
  idReclamation!: number;
  option = "";
  ngOnInit(): void {
    this.idReclamation = this.actR.snapshot.params['param'];
    this.actR.queryParams.subscribe(data => this.option = data['name']) 
  }

}
