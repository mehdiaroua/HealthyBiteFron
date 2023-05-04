import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repasProduit.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addrepas',
  templateUrl: './addrepas.component.html',
  styleUrls: ['./addrepas.component.css'],
  providers:[MessageService,UserService]
})
export class AddrepasComponent implements OnInit{
  repas: Repas = new Repas();
  submitted = false;
  imageFile!: File;
  uploadedFiles: any[] = [];
  user!:any;
constructor(private repasService:RepasProduitService,private router:Router, private messageService:MessageService,private userService:StorageService){}
ngOnInit(){
this.user = this.userService.getUser();
console.log(this.user);

}
save() {
  this.repasService.addRepasAndImage(this.repas.nom, this.repas.description, this.repas.prix, this.repas.ingredient, this.repas.allergene, this.repas.objectifType,this.repas.categorieRepas, this.imageFile)
    .subscribe(data => console.log(data), error => console.log(error));
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Produit Ajouté avec Succés' });
  this.repas = new Repas();

}

onSubmit() {
  this.submitted = true;

  this.save();
  this.router.navigate(['/repas/restaurant']);
}

onFileSelected(event: any) {
  this.imageFile = event.target.files[0];
}



}
