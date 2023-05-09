import { Component } from '@angular/core';
import { Produit } from 'src/app/Models/Produit';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Produit[] = [];

  constructor(private cartService: CartServiceService) {
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

}
