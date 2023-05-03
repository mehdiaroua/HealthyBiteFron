import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddrepasComponent } from '../addrepas/addrepas.component';
import { Router } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Repas } from 'src/app/Models/Repas';
import { User } from 'src/app/Class/user';
import { UserService } from 'src/app/service/user.service';
import { StorageService } from 'src/app/service/storage.service';
import { CategProduit } from 'src/app/Models/CategProduit';
import { RepasProduitService } from 'src/app/repasProduit.service';

@Component({
  selector: 'app-repas-restaurant',
  templateUrl: './repas-restaurant.component.html',
  providers:[MessageService,ConfirmationService,DialogService]
})
export class RepasRestaurantComponent implements OnInit{

  clonedProducts: { [s: string]: Repas } = {};

  repas!: Repas[];
  rep!: Repas;

  productDialog!: boolean;

    products!: Repas[];

    product!: Repas;

    selectedProducts!: Repas[];

    submitted!: boolean;

    statuses!: any[];
    imageFile!: File;
    ref!: DynamicDialogRef;
    id!:number;
    user!:any;
  constructor(private repasService:RepasProduitService,private messageService: MessageService, private confirmationService: ConfirmationService,public dialogService: DialogService,private router:Router, private userService:StorageService){}

  ngOnInit(): void {
    //this.id=2; //this.id = getUserId(); obtenir l'id de l'utilisateur
    this.user= this.userService.getUser();
    console.log(this.user);

    this.repasService.getRepasByUserId(this.userService.getUser().id)
      .subscribe(repas => {
        this.repas = repas;

      });
  }

  show() {
    this.ref = this.dialogService.open(AddrepasComponent, { header: 'Add a Product'});
}
/*deleteRepas(repas: Repas): void {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + repas.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.repasService.deleteRepas(repas).subscribe(
              () => {
                  this.repas = this.repas.filter((val) => val.id !== repas.id);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'repas Deleted', life: 3000 });
              },
              (error) => {
                  console.log('Error deleting repas:', error);
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting repas', life: 3000 });
              }
          );
      }
  });
}*/

deleteRepas(repas: Repas): void {
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + repas.nom + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.repasService.deleteRepas(repas).subscribe(
        () => {
          this.repas = this.repas.filter((val) => val.id !== repas.id);
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Repas supprimé avec Succées' });
          console.log('Repas deleted successfully');
          this.router.navigate(['/repas/restaurant']);
        },
        (error) => {
          console.log('Error deleting repas:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting repas', life: 3000 });
        }
      );
    }
  });
}



  openNew() {

    this.submitted = false;
    this.productDialog = true;
}

deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected products?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.products = this.products.filter((val) => !this.selectedProducts.includes(val));
            this.repasService.deleteRepas(this.product).subscribe();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        }
    });
}





hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}




/*saveProduct() {
    this.submitted = true;
          //  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        this.products = [...this.products];
        this.productDialog = false;
        this.repasService.addRepasAndImage(this.product.nom, this.product.description, this.product.prix, this.product.ingredient, this.product.allergene, this.product.objectifType, this.product.categorieRepas,  this.imageFile,this.product.user)
    .subscribe(data => console.log(data), error => console.log(error));
  this.product = new Repas();
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    }*/

onFileSelected(event: any) {
  this.imageFile = event.target.files[0];
}

findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}


onRowEditInit(repas: Repas) {
  this.clonedProducts[repas.id] = { ...repas };
}
updateRepasAndImage(id: number, nom: string, description: string, prix: number, ingredient: string, allergene: string, objectifType: string, categRepas: CategProduit, image: File) {
  this.repasService.updateRepasAndImage(id, nom, description, prix, ingredient, allergene, objectifType, categRepas, image).subscribe(
    (repas) => console.log(repas),
    (error) => console.log(error)
  );
}

onRowEditSave(repas: Repas) {
  if (repas.prix > 0) {
    delete this.clonedProducts[repas.id];

    if (this.imageFile) {
      this.repasService.updateRepasAndImage(repas.id,repas.nom, repas.description, repas.prix, repas.ingredient, repas.allergene, repas.objectifType, repas.categorieRepas, this.imageFile).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Repas is updated' });
          //this.imageFile = null; // reset image file after update
        },
        (error) => {
          console.log('Error updating repas:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error updating repas', life: 3000 });
        }
      );
    } else {
      this.repasService.updateRepasAndImage(repas.id,repas.nom, repas.description, repas.prix, repas.ingredient, repas.allergene, repas.objectifType, repas.categorieRepas,this.imageFile).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Repas is updated' });
        },
        (error) => {
          console.log('Error updating repas:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error updating repas', life: 3000 });
        }
      );
    }
  } else {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
  }
}


onRowEditCancel(repas: Repas, index: number) {
  this.repas[index] = this.clonedProducts[repas.id];
  delete this.clonedProducts[repas.id];
}



}




