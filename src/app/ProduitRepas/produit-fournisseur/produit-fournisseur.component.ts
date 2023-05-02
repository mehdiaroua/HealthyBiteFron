import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Produit } from 'src/app/Models/RepasProduit/Produit';
import { RepasProduitService } from 'src/app/repasProduit.service';
import { AddproduitComponent } from '../addproduit/addproduit.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-produit-fournisseur',
  templateUrl: './produit-fournisseur.component.html',
  styleUrls: ['./produit-fournisseur.component.css'],
  providers:[MessageService,ConfirmationService,DialogService]
})
export class ProduitFournisseurComponent implements OnInit{
  clonedProducts: { [s: string]: Produit } = {};

  produit!: Produit[];
  produits!: Produit;

  productDialog!: boolean;

    products!: Produit[];

    product!: Produit;

    selectedProducts!: Produit[];

    submitted!: boolean;

    statuses!: any[];
    imageFile!: File;
    ref!: DynamicDialogRef;
    id!:any;

  currentUser!:any;
    constructor(private repasService:RepasProduitService,private messageService: MessageService, private confirmationService: ConfirmationService,public dialogService: DialogService,private router:Router,private userService:UserService){}

    ngOnInit(): void {
this.currentUser = this.userService.getCurrentUser();

      this.id=this.userService.getCurrentUser(); //this.id = getUserId(); obtenir l'id de l'utilisateur

      this.repasService.getProduitByUserId(this.id)
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
          this.repasService.addProduitAndImage(this.product.nom, this.product.description, this.product.prix, this.product.ingredient,  this.product.categorieProduit,  this.imageFile)
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
  updateProduitAndImage(id: number, nom: string, description: string, prix: number, ingredient: string, allergene: string, objectifType: string, categProduit: string, image: File) {
    this.repasService.updateProduitAndImage(id, nom, description, prix, ingredient, categProduit, image).subscribe(
      (repas) => console.log(repas),
      (error) => console.log(error)
    );
  }

  onRowEditSave(produit: Produit) {
    if (produit.prix > 0) {
      delete this.clonedProducts[produit.id];

      if (this.imageFile) {
        this.repasService.updateProduitAndImage(produit.id,produit.nom, produit.description, produit.prix, produit.ingredient, produit.categorieProduit, this.imageFile).subscribe(
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
        this.repasService.updateProduitAndImage(produit.id,produit.nom, produit.description, produit.prix, produit.ingredient,   produit.categorieProduit,this.imageFile).subscribe(
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



  }






