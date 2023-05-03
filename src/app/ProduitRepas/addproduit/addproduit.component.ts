import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategProduit } from 'src/app/Models/CategProduit';
import { Produit } from 'src/app/Models/Produit';
import { RepasProduitService } from 'src/app/repasProduit.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css'],
  providers:[MessageService,StorageService]
})
export class AddproduitComponent implements OnInit {

  produit: Produit = new Produit();
  submitted = false;
  imageFile!: File;
  uploadedFiles: any[] = [];
user!:any;

  constructor(private repasService:RepasProduitService,private router:Router, private messageService:MessageService, private userService:StorageService){}
  ngOnInit(): void {
    this.user = this.userService.getUser();
console.log(this.user);
  }


  save() {
    this.repasService.addProduitAndImage(this.produit.nom, this.produit.description, this.produit.prix, this.produit.ingredient,  this.produit.categProduit,  this.imageFile)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Produit Ajouté avec Succés' });

  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/produit/fournisseur']);
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  categProduitValues(): string[] {
    return Object.keys(CategProduit).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}