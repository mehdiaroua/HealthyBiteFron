import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repas-produit.service';

@Component({
  selector: 'app-addrepas',
  templateUrl: './addrepas.component.html',
  styleUrls: ['./addrepas.component.css']
})
export class AddrepasComponent {
  repas: Repas = new Repas();
constructor(private repasService:RepasProduitService,private R:Router){}


onSubmit(addRepasForm: NgForm) {
 /* this.repasService.addRepas(this.repas)
    .subscribe(data => {
      console.log(data);
      this.repas = new Repas();
      addRepasForm.resetForm();
    }, error => console.log(error));*/
}

}
