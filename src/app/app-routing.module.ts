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
import { FeedComponent } from './post-comment/feed/feed.component';
import { PostDetailsComponent } from './post-comment/post-details/post-details.component';
import { UpdatePostComponent } from './post-comment/update-post/update-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "shop", component: ShopComponent },
  { path: "blog", component: RecetteConseilComponent },
  { path: "blogDetails", component: DetailsRecetteComponent },
  { path: "details", component: DetailsComponent },
  { path: "panier", component: PanierComponent },
  { path: "checkout", component: PaiementComponent },
  { path: "repas/addRepas", component: AddrepasComponent },
  { path: "repas/restaurant", component: RepasRestaurantComponent },
  { path: "post/posts", component: FeedComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
{ path: 'posts/update/:id', component: UpdatePostComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
