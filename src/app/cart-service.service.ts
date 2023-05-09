import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Commande } from './Models/Commande';
import { HttpClient } from '@angular/common/http';
import { Produit } from './Models/RepasProduit/Produit';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  readonly URL = "http://localhost:8080/api/test/"
  private cartItems: Produit[] = [];
  

  private cartItemsSubject: BehaviorSubject<Produit[]> = new BehaviorSubject<Produit[]>([]);
  private cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) { }

  addToCart(item: Produit): void {
    const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantite += item.quantite;
      existingItem.subtotal = existingItem.quantite * existingItem.prix;
    } else {
      item.quantite = 1;
      item.subtotal = item.prix;
      this.cartItems.push(item);
    }
    this.cartItemsSubject.next(this.cartItems);
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  
  addItem(item: Produit) {
    this.cartItems.push(item);
  }
  removeItem(item: Produit) {
    const index = this.cartItems.indexOf(item);
    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }
  }

  incrementQuantity(item: Produit) {
    item.quantite++;
  }

  decrementQuantity(item: Produit) {
    item.quantite--;
    if (item.quantite === 0) {
      this.removeItem(item);
    }
  }

  getItems() {
    return this.cartItems;
  }

  clear() {
    this.cartItems = [];
  }
 

}
