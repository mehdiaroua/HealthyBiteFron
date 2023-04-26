import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repas-produit.service';

@Component({
  selector: 'app-updaterepas',
  templateUrl: './updaterepas.component.html',
  styleUrls: ['./updaterepas.component.css']
})
export class UpdaterepasComponent {

  repas?: Repas;
  data: any;

constructor(private service:RepasProduitService,route:ActivatedRoute,router:Router){}
  ngOnInit(): void {
    /*let id = this.route.snapshot.params['id'];
    this.service.getRepasByUserId().subscribe(data => {
      this.repas = data
      console.log(this.repas)
    })*/
  }
}
