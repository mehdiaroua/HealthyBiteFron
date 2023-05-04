import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';

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
import { ERole } from './Class/user';
import { RecetteListComponent } from './recetteConseil/recette/recette-list/recette-list.component';
import { RecetteFormComponent } from './recetteConseil/recette/recette-form/recette-form.component';
import { RecetteConseilComponent } from './recetteConseil/recette-conseil/recette-conseil.component';
import { DetailsRecetteComponent } from './recetteConseil/recette/details-recette/details-recette.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "unauthorized", component:UnauthorizedComponent},
  {path: "home", component:HomeComponent},
  {path: "shop", component:ShopComponent},
  {path: "blog", component:RecetteConseilComponent},
  {path: "blogDetails", component:DetailsRecetteComponent},
 {path: 'shop/:id', component:DetailsComponent,
 canActivate: [RoleGuard],
 data: { requiredRoles: [ERole.ROLE_RESTAURANT] }},
  {path: "panier", component:PanierComponent},
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
  {path: "panier", component:PanierComponent},
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
