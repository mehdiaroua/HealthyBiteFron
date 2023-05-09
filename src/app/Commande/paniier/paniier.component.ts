import { Component } from '@angular/core';
import { Produit } from 'src/app/Models/Produit';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-paniier',
  templateUrl: './paniier.component.html',
  styleUrls: ['./paniier.component.css']
})
export class PaniierComponent {
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
