import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repasProduit.service';
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
constructor(private repasService:RepasProduitService,private router:Router, private messageService:MessageService,private userService:UserService){}
ngOnInit(){
this.user = this.userService.getCurrentUser();
console.log(this.user);

}

save() {


  const formData = new FormData();
  formData.append('nom', this.repas.nom);
  formData.append('description', this.repas.description);
  formData.append('prix', this.repas.prix.toString());
  formData.append('ingredient', this.repas.ingredient);
  formData.append('allergene', this.repas.allergene);
  formData.append('objectifType', this.repas.objectifType);
  formData.append('categRepas', this.repas.categorieRepas);
  formData.append('image', this.imageFile, this.imageFile.name);
  formData.append('user', JSON.stringify(this.user));
  this.repasService.addRepasAndImage(this.repas.nom, this.repas.description, this.repas.prix, this.repas.ingredient, this.repas.allergene, this.repas.objectifType, this.repas.categorieRepas, this.imageFile, this.user)
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
