import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Produit } from 'src/app/Models/RepasProduit/Produit';
import { RepasProduitService } from 'src/app/repasProduit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css'],
  providers:[MessageService]
})
export class AddproduitComponent {

  produit: Produit = new Produit();
  submitted = false;
  imageFile!: File;
  uploadedFiles: any[] = [];


  constructor(private repasService:RepasProduitService,private router:Router, private messageService:MessageService){}


  save() {
    this.repasService.addProduitAndImage(this.produit.nom, this.produit.description, this.produit.prix, this.produit.ingredient,  this.produit.categorieProduit,  this.imageFile)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Produit Ajouté avec Succés' });
    this.router.navigate(['/produitShop']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }
}
