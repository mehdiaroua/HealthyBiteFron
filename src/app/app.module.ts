import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { FooterComponent } from './headers/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { RecetteConseilComponent } from './recetteConseil/details-recette/recette-conseil/recette-conseil.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/details-recette/details-recette.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';
import { UpdateLivraisonComponent } from './Commande/update-livraison/update-livraison.component';
import { AddlivraisonComponent } from './Commande/addlivraison/addlivraison.component';
import { CommonModule } from '@angular/common';
import { GetAllLivraisonComponent } from './Commande/get-all-livraison/get-all-livraison.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { ProduitShopComponent } from './ProduitRepas/produit-shop/produit-shop.component';
import { AddproduitComponent } from './ProduitRepas/addproduit/addproduit.component';
import { ProduitFournisseurComponent } from './ProduitRepas/produit-fournisseur/produit-fournisseur.component';
import { LoginComponent } from './login/login.component';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';
import { PaniierComponent } from './commande/paniier/paniier.component';


import { AddnutritionComponent } from './ProduitRepas/addnutrition/addnutrition.component';
import { AddNutrRepasComponent } from './ProduitRepas/add-nutr-repas/add-nutr-repas.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PiechartComponent } from './piechart/piechart.component';
import {Chart} from 'chart.js'
import { registerables } from 'chart.js';
import { ShowProduitNutritionComponent } from './ProduitRepas/show-produit-nutrition/show-produit-nutrition.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    RecetteConseilComponent,
    DetailsComponent,
    PanierComponent,
    PaiementComponent,
    DetailsRecetteComponent,
    ProduitFournisseurComponent,
    RepasRestaurantComponent,
    ProduitShopComponent,
    AddproduitComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddlivraisonComponent,
    RepasRestaurantComponent,
    ProduitFournisseurComponent,
    AddrepasComponent,
    AddproduitComponent,
    RepasRestaurantComponent,
    ProduitFournisseurComponent,
    PaniierComponent,
GetAllLivraisonComponent,
    AddnutritionComponent,
    AddNutrRepasComponent,
    ProfileUserComponent,
    AdduserComponent,
    PiechartComponent,
    ShowProduitNutritionComponent,
    UnauthorizedComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    FileUploadModule,
    TagModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],

  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
