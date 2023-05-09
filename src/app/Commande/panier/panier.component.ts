import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/AppService';
import { Commande } from 'src/app/Models/Commande';
import { Produit } from 'src/app/Models/Produit';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  cartItems: Produit[] = [];
  formCommande: any;

  commande: Commande = new Commande();
  couponCode: string = 'SUMMER2023';
  isButtonClicked = false;
 

  
  constructor( private http: HttpClient,private cartService:CartServiceService ,  private form: FormBuilder, private router: Router, private service:AppService ) { 
    this.cartItems = cartService.getItems();


  }
  incrementQuantity(item: Produit): void {
    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: Produit): void {
    this.cartService.decrementQuantity(item);
  }

  removeItem(item: Produit): void {
    this.cartService.removeItem(item);
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.prix * item.quantite, 0);
  }

  // checkout(): void {
  //   // Implement checkout logic here
  // }
  
  applyCoupon(): number {
 
    return this.cartItems.reduce((total, item) => total + item.prix * item.quantite*(90/100), 0);

  }
  onButtonClick() {
    this.isButtonClicked = true;
  }
  addCommande(): void {
    this.cartService.addCommande(this.commande)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
        this.commande = new Commande();
  }
  
 
}