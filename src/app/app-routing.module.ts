import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { RecetteConseilComponent } from './recetteConseil/details-recette/recette-conseil/recette-conseil.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/details-recette/details-recette.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './User/auth.guard';

import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RoleGuard } from './User/role.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "home", component:HomeComponent,canActivate: [RoleGuard]},
  {path: "shop", component:ShopComponent},
  {path: "blog", component:RecetteConseilComponent,canActivate:[AuthGuard]},
  {path: "blogDetails", component:DetailsRecetteComponent,canActivate:[AuthGuard]},
  {path: "details", component:DetailsComponent,canActivate:[AuthGuard]},
  {path: "panier", component:PanierComponent,canActivate:[AuthGuard]},
  {path: "checkout", component:PaiementComponent},
  {path: "dash", component:DashboardComponent,canActivate: [RoleGuard]},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "forgot", component:ForgotpasswordComponent},
  {path: "reset", component:ResetPasswordComponent},
  {path: "add", component:AdduserComponent},
  {path: "pie", component:PiechartComponent}



  






  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
