import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Repas } from 'src/app/Models/RepasProduit/Repas';
import { RepasProduitService } from 'src/app/repas-produit.service';

@Component({
  selector: 'app-repas-restaurant',
  templateUrl: './repas-restaurant.component.html',
  styleUrls: ['./repas-restaurant.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class RepasRestaurantComponent implements OnInit{


  repas!: Repas[];


  productDialog!: boolean;

    products!: Repas[];

    product!: Repas;

    selectedProducts!: Repas[];

    submitted!: boolean;

    statuses!: any[];
    imageFile!: File;
  constructor(private repasService:RepasProduitService,private messageService: MessageService, private confirmationService: ConfirmationService){}

  ngOnInit(): void {
    this.repasService.getAllRepas()
    .subscribe(repas => this.repas = repas);
    console.log(this.repas);
  }

  getAllRepas(): void {
    this.repasService.getAllRepas()
      .subscribe(repas => this.repas = repas);
  }

  deleteRepas(repas: Repas): void {
    this.repas = this.repas.filter(r => r !== repas);
    this.repasService.deleteRepas(repas).subscribe();
  }

  updateRepas(repas: Repas): void {
    this.repasService.updateRepas(repas).subscribe(updatedRepas => {
      const index = this.repas.findIndex(r => r.id === updatedRepas.id);
      if (index !== -1) {
        this.repas[index] = updatedRepas;
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

editProduct(product: Repas) {
    this.product = { ...product };
    this.productDialog = true;
}

deleteProduct(product: Repas) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + product.nom + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.products = this.products.filter((val) => val.id !== product.id);
            this.repasService.deleteRepas(product).subscribe();

            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
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
        this.repasService.addRepasAndImage(this.product.nom, this.product.description, this.product.prix, this.product.ingredient, this.product.allergene, this.product.objectifType, this.product.categorieRepas,  this.imageFile)
    .subscribe(data => console.log(data), error => console.log(error));
  this.product = new Repas();
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


}




