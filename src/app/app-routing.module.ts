import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { RecetteConseilComponent } from './recetteConseil/details-recette/recette-conseil/recette-conseil.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/details-recette/details-recette.component';
import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';
import { ProduitShopComponent } from './ProduitRepas/produit-shop/produit-shop.component';
import { AddproduitComponent } from './ProduitRepas/addproduit/addproduit.component';
import { ProduitFournisseurComponent } from './ProduitRepas/produit-fournisseur/produit-fournisseur.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component:HomeComponent},
  {path: "shop", component:ShopComponent},
  {path: "blog", component:RecetteConseilComponent},
  {path: "blogDetails", component:DetailsRecetteComponent},
 {path: 'shop/:id', component:DetailsComponent},
  {path: "panier", component:PanierComponent},
  {path: "checkout", component:PaiementComponent},
  {path: "repas/addRepas", component:AddrepasComponent},
  {path: "produit/addProduit", component:AddproduitComponent},
  {path: "repas/restaurant", component:RepasRestaurantComponent},
  {path: "produit/fournisseur", component:ProduitFournisseurComponent},
  {path: "produitShop", component:ProduitShopComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
