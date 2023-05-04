import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Produit } from 'src/app/Models/RepasProduit/Produit';
import { RepasProduitService } from 'src/app/repasProduit.service';
import { AddproduitComponent } from '../addproduit/addproduit.component';
import { UserService } from 'src/app/service/user.service';
import { StorageService } from 'src/app/service/storage.service';
import { CategProduit } from 'src/app/Models/RepasProduit/CategProduit';
import { AddnutritionComponent } from '../addnutrition/addnutrition.component';
import {MatDialog} from '@angular/material/dialog';
import { Nutrition } from 'src/app/Models/RepasProduit/Nutrition';

@Component({ 
  selector: 'app-produit-fournisseur',
  templateUrl: './produit-fournisseur.component.html',
  styleUrls: ['./produit-fournisseur.component.css'],
  providers:[MessageService,ConfirmationService,DialogService,MatDialog]
})
export class ProduitFournisseurComponent implements OnInit{
  clonedProducts: { [s: string]: Produit } = {};
  nutrition!: Nutrition;
  produit!: Produit[];
  produits!: Produit;

  productDialog!: boolean;

    products!: Produit[];

    product!: Produit;

    selectedProducts!: Produit[];

    selectedProduct!: Produit;
    submitted!: boolean;

    statuses!: any[];
    imageFile!: File;
    ref!: DynamicDialogRef;
    id!:any;
    user!:any;
  currentUser!:any;
    constructor(private repasService:RepasProduitService,private messageService: MessageService,private dialog:MatDialog, private confirmationService: ConfirmationService,public dialogService: DialogService,private router:Router,private userService:StorageService){}

    ngOnInit(): void {
      this.user= this.userService.getUser();

      //this.id = getUserId(); obtenir l'id de l'utilisateur

      this.repasService.getProduitByUserId(this.userService.getUser().id)
        .subscribe(produits => {
          this.produit = produits;

        });
    }

    show() {
      this.ref = this.dialogService.open(AddproduitComponent, { header: 'Add a Product'});
  }



  deleteProduit(produit: Produit): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + produit.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.repasService.deleteProduit(produit).subscribe(
          () => {
            this.produit = this.produit.filter((val) => val.id !== produit.id);
            this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content' });
            console.log('produit deleted successfully');
            this.router.navigate(['/produit/fournisseur']);
          },
          (error) => {
            console.log('Error deleting produit:', error);
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
              this.repasService.deleteProduit(this.product).subscribe();
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
          }
      });
  }





  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
      this.submitted = true;
            //  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          this.products = [...this.products];
          this.productDialog = false;
          this.repasService.addProduitAndImage(this.product.nom, this.product.description, this.product.prix, this.product.ingredient,  this.product.categProduit,  this.imageFile)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Produit();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

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


  onRowEditInit(produit: Produit) {
    this.clonedProducts[produit.id] = { ...produit };
  }
  updateProduitAndImage(id: number, nom: string, description: string, prix: number, ingredient: string, categProduit: CategProduit, image: File) {
    this.repasService.updateProduitAndImage(id, nom, description, prix, ingredient, categProduit, image).subscribe(
      (produit) => console.log(produit),
      (error) => console.log(error)
    );
  }

  onRowEditSave(produit: Produit) {
    if (produit.prix > 0) {
      delete this.clonedProducts[produit.id];

      if (this.imageFile) {
        this.repasService.updateProduitAndImage(produit.id,produit.nom, produit.description, produit.prix, produit.ingredient, produit.categProduit, this.imageFile).subscribe(
          () => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'produit is updated' });
            //this.imageFile = null; // reset image file after update
          },
          (error) => {
            console.log('Error updating repas:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error updating repas', life: 3000 });
          }
        );
      } else {
        this.repasService.updateProduitAndImage(produit.id,produit.nom, produit.description, produit.prix, produit.ingredient,   produit.categProduit,this.imageFile).subscribe(
          () => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Produit is updated' });
          },
          (error) => {
            console.log('Error updating produit:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error updating Produit', life: 3000 });
          }
        );
      }
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    }
  }


  onRowEditCancel(produit: Produit, index: number) {
    this.produit[index] = this.clonedProducts[produit.id];
    delete this.clonedProducts[produit.id];
  }

  categProduitValues(): string[] {
    return Object.keys(CategProduit).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }










  }






