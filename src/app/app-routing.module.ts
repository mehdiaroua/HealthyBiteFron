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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './User/auth.guard';

import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RoleGuard } from './User/role.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';
import { AddnutritionComponent } from './ProduitRepas/addnutrition/addnutrition.component';
import { AddNutrRepasComponent } from './ProduitRepas/add-nutr-repas/add-nutr-repas.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PiechartComponent } from './piechart/piechart.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  {path: "repas/restaurant/:id", component:AddNutrRepasComponent},
  {path: "produit/fournisseur", component:ProduitFournisseurComponent},
  {path: "produit/fournisseur/:id", component:AddnutritionComponent},
  {path: "produitShop", component:ProduitShopComponent},
  {path: "blog", component:RecetteConseilComponent,canActivate:[AuthGuard]},
  {path: "blogDetails", component:DetailsRecetteComponent,canActivate:[AuthGuard]},
  {path: "details", component:DetailsComponent},
  {path: "panier", component:PanierComponent},
  {path: "checkout", component:PaiementComponent,canActivate:[AuthGuard]},
  {path: "dash", component:DashboardComponent,canActivate:[RoleGuard]},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "forgot", component:ForgotpasswordComponent},
  {path: "reset", component:ResetPasswordComponent},
  { path: 'add-nutrition/:id', component: AddnutritionComponent },
  {path : "userProfile", component: ProfileUserComponent},
  {path: "add", component:AdduserComponent},
  {path: "pie", component:PiechartComponent},











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
