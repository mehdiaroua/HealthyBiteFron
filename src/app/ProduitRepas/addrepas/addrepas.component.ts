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
  submitted = false;
  imageFile!: File;
constructor(private repasService:RepasProduitService,private router:Router){}


save() {
  this.repasService.addRepasAndImage(this.repas.nom, this.repas.description, this.repas.prix, this.repas.ingredient, this.repas.allergene, this.repas.objectifType, this.repas.categorieRepas,  this.imageFile)
    .subscribe(data => console.log(data), error => console.log(error));
  this.repas = new Repas();
  this.router.navigate(['/shop']);
}

onSubmit() {
  this.submitted = true;
  this.save();
}

onFileSelected(event: any) {
  this.imageFile = event.target.files[0];
}

}
