import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
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
import { CartComponent} from './Commande/Cart/cart.component';
import { AddnutritionComponent } from './ProduitRepas/addnutrition/addnutrition.component';
import { AddNutrRepasComponent } from './ProduitRepas/add-nutr-repas/add-nutr-repas.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ERole } from './Class/user';
import { PanierComponent } from './Commande/panier/panier.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "unauthorized", component:UnauthorizedComponent},
  {path: "home", component:HomeComponent},
  {path: "shop", component:ShopComponent},
  {path: "blog", component:RecetteConseilComponent},
  {path: "blogDetails", component:DetailsRecetteComponent},
  {path: "details", component:DetailsComponent},
  {path: "panier", component:CartComponent},
  {path: "cart", component:PanierComponent},
  
  {path: "checkout", component:PaiementComponent},
  { path: 'livraisons', component: GetAllLivraisonComponent },
  { path: 'addlivraison', component: AddlivraisonComponent },
  { path: 'updateLiv/:id', component: UpdateLivraisonComponent },
  {path: "repas/addRepas", component:AddrepasComponent},
  {path: "produit/addProduit", component:AddproduitComponent},
  {path: "repas/restaurant", component:RepasRestaurantComponent},
  {path: "paiement", component:PaiementComponent}, 
  {path: "produit/fournisseur", component:ProduitFournisseurComponent},
 {path: 'shop/:id', component:DetailsComponent,
 canActivate: [RoleGuard],
 data: { requiredRoles: [ERole.ROLE_RESTAURANT] }},
  {path: "checkout", component:PaiementComponent},
  {path: "repas/addRepas", component:AddrepasComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_RESTAURANT] }},
  {path: "produit/addProduit", component:AddproduitComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_FOURNISSEUR] }},
  {path: "repas/restaurant", component:RepasRestaurantComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_RESTAURANT] }},
  {path: "repas/restaurant/:id", component:AddNutrRepasComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_RESTAURANT] }},
  {path: "produit/fournisseur", component:ProduitFournisseurComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_FOURNISSEUR] }},
  {path: "produit/fournisseur/:id", component:AddnutritionComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_FOURNISSEUR] }},
  {path: "produitShop", component:ProduitShopComponent},
  {path: "blog", component:RecetteConseilComponent,canActivate:[AuthGuard]},
  {path: "blogDetails", component:DetailsRecetteComponent,canActivate:[AuthGuard]},
  {path: "details", component:DetailsComponent},
  {path: "panier", component:CartComponent},
  {path: "checkout", component:PaiementComponent,canActivate:[AuthGuard]},
  {path: "dash", component:DashboardComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_ADMIN] }},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "forgot", component:ForgotpasswordComponent},
  {path: "reset", component:ResetPasswordComponent},
  
  { path: 'add-nutrition/:id', component: AddnutritionComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_FOURNISSEUR] } },
  {path : "userProfile", component: ProfileUserComponent},
  { 
    path: 'add', 
    component: AdduserComponent,
    canActivate: [RoleGuard],
    data: { requiredRoles: [ERole.ROLE_ADMIN] }// specify required roles here
  },  
  {path: "pie", component:PiechartComponent},











];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
