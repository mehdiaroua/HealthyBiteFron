import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { RecetteConseilComponent } from './recetteConseil/details-recette/recette-conseil/recette-conseil.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/details-recette/details-recette.component';
import { GetAllLivraisonComponent } from './Commande/get-all-livraison/get-all-livraison.component';

import { UpdateLivraisonComponent } from './Commande/update-livraison/update-livraison.component';
import { AddlivraisonComponent } from './Commande/addlivraison/addlivraison.component';
import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';
import { ProduitShopComponent } from './ProduitRepas/produit-shop/produit-shop.component';
import { AddproduitComponent } from './ProduitRepas/addproduit/addproduit.component';
import { ProduitFournisseurComponent } from './ProduitRepas/produit-fournisseur/produit-fournisseur.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './User/auth.guard';

import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RoleGuard } from './User/role.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';
import { PaniierComponent } from './commande/paniier/paniier.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "home", component:HomeComponent},
  {path: "shop", component:ShopComponent},
  {path: "blog", component:RecetteConseilComponent},
  {path: "blogDetails", component:DetailsRecetteComponent},
  {path: "details", component:DetailsComponent},
  {path: "panier", component:PaniierComponent},
  {path: "checkout", component:PaiementComponent},
  { path: 'aaa', component: GetAllLivraisonComponent },
  { path: 'bbb', component: AddlivraisonComponent },
  { path: 'updateLiv/:id', component: UpdateLivraisonComponent },
  {path: "repas/addRepas", component:AddrepasComponent},
  {path: "produit/addProduit", component:AddproduitComponent},
  {path: "repas/restaurant", component:RepasRestaurantComponent},
  {path: "paiement", component:PaiementComponent}, 
  {path: "produit/fournisseur", component:ProduitFournisseurComponent},
  {path: "produitShop", component:ProduitShopComponent},
  {path: "blog", component:RecetteConseilComponent,canActivate:[AuthGuard]},
  {path: "blogDetails", component:DetailsRecetteComponent,canActivate:[AuthGuard]},
  {path: "details", component:DetailsComponent},
  {path: "panier", component:PaniierComponent},
  {path: "checkout", component:PaiementComponent,canActivate:[AuthGuard]},
  {path: "dash", component:DashboardComponent,canActivate:[RoleGuard]},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "forgot", component:ForgotpasswordComponent},
  {path: "reset", component:ResetPasswordComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
