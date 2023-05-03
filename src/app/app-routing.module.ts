import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/recette/details-recette/details-recette.component';
import { RecetteConseilComponent } from './recetteConseil/recette-conseil/recette-conseil.component';
import { RecetteListComponent } from './recetteConseil/recette/recette-list/recette-list.component';
import { RecetteFormComponent } from './recetteConseil/recette/recette-form/recette-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: RecetteConseilComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'checkout', component: PaiementComponent },
  // recette
  // { path: 'blogDetails', component: DetailsRecetteComponent },
  { path: 'recette', component: RecetteListComponent },
  { path: 'recette/add', component: RecetteFormComponent },
  { path: 'recette/:id', component: DetailsRecetteComponent },
  { path: 'recette/:id/edit', component: RecetteFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
