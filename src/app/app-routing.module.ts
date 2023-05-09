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
import { FeedComponent } from './post-comment/feed/feed.component';
import { PostDetailsComponent } from './post-comment/post-details/post-details.component';
import { UpdatePostComponent } from './post-comment/update-post/update-post.component';
import { CommentsComponent } from './post-comment/comments/comments.component';
import { NotificationComponent } from './notification/notification.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { AddReponseReclamationComponent } from './add-reponse-reclamation/add-reponse-reclamation.component';
import { ReclamationUserComponent } from './reclamation-user/reclamation-user.component';
import { RecetteListComponent } from './recetteConseil/recette/recette-list/recette-list.component';
import { RecetteFormComponent } from './recetteConseil/recette/recette-form/recette-form.component';
import { DetailsRecetteComponent } from './recetteConseil/recette/details-recette/details-recette.component';
import { ObjectifListComponent } from './recetteConseil/objectif/objectif-list/objectif-list.component';
import { ObjectifDetailComponent } from './recetteConseil/objectif/objectif-detail/objectif-detail.component';
import { ConseilListComponent } from './recetteConseil/conseil/conseil-list/conseil-list.component';
import { ConseilDetailComponent } from './recetteConseil/conseil/conseil-detail/conseil-detail.component';
import { RecetteConseilComponent } from './recetteConseil/recette-conseil/recette-conseil.component';
import { UpdateLivraisonComponent } from './Commande/update-livraison/update-livraison.component';
import { AddlivraisonComponent } from './Commande/addlivraison/addlivraison.component';
import { GetAllLivraisonComponent } from './Commande/get-all-livraison/get-all-livraison.component';






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
  {path : "userProfile", component: ProfileUserComponent,canActivate: [AuthGuard]},
  {
    path: 'add',
    component: AdduserComponent,
    canActivate: [RoleGuard],
    data: { requiredRoles: [ERole.ROLE_ADMIN] }// specify required roles here
  },
  {path: "pie", component:PiechartComponent},
  {path: "post/posts", component: FeedComponent,
  canActivate: [RoleGuard],
  data: { requiredRoles: [ERole.ROLE_ADMIN,ERole.ROLE_FOURNISSEUR,ERole.ROLE_RESTAURANT,ERole.ROLE_USER] }},
  { path: 'posts/:id', component: PostDetailsComponent},
  { path: 'posts/update/:id', component: UpdatePostComponent },
  { path: 'posts/comments', component: CommentsComponent },
  { path: "Notification", component: NotificationComponent },
  { path: "Reponses", component: ReponseListComponent },
  { path: "Reclamations", component: ReclamationListComponent },
  { path: 'reclamationDetails/:param', component: ReclamationDetailComponent },
  { path: 'shop/AddReclamation/:id', component: AddReclamationComponent},
  { path: 'addReponse/:idReclamation', component: AddReponseReclamationComponent },
  { path : 'reclamationUser', component : ReclamationUserComponent},
  // recette
  // { path: 'blogDetails', component: DetailsRecetteComponent },
  { path: 'recette', component: RecetteListComponent },
  { path: 'recette/add', component: RecetteFormComponent },
  { path: 'recette/:id', component: DetailsRecetteComponent },
  { path: 'recette/:id/edit', component: RecetteFormComponent },
  { path: 'livraisons', component: GetAllLivraisonComponent },
  { path: 'addlivraison', component: AddlivraisonComponent },
  { path: 'updateLiv/:id', component: UpdateLivraisonComponent },
  {path: "cart", component:PanierComponent},
  {path: "checkout", component:PaiementComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // recette end
  // objectifs
  { path: 'objectif', component: ObjectifListComponent },
  { path: 'objectif/:id', component: ObjectifDetailComponent },
  { path: 'conseil', component: ConseilListComponent },
  { path: 'conseil/:id', component: ConseilDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
