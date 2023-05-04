import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddLivraisonComponent } from './Commande/add-livraison/add-livraison.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './headers/footer/footer.component';
import { LeftSideBarComponent } from './headers/left-side-bar/left-side-bar.component';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { SecondaryNavbarComponent } from './headers/secondary-navbar/secondary-navbar.component';
import { HomeComponent } from './home/home.component';
import { ConseilDetailComponent } from './recetteConseil/conseil/conseil-detail/conseil-detail.component';
import { ConseilFromComponent } from './recetteConseil/conseil/conseil-from/conseil-from.component';
import { ConseilListComponent } from './recetteConseil/conseil/conseil-list/conseil-list.component';
import { IngredientDetailComponent } from './recetteConseil/ingredient/ingredient-detail/ingredient-detail.component';
import { IngredientFormComponent } from './recetteConseil/ingredient/ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './recetteConseil/ingredient/ingredient-list/ingredient-list.component';
import { ObjectifDetailComponent } from './recetteConseil/objectif/objectif-detail/objectif-detail.component';
import { ObjectifFormComponent } from './recetteConseil/objectif/objectif-form/objectif-form.component';
import { ObjectifListComponent } from './recetteConseil/objectif/objectif-list/objectif-list.component';
import { RecetteConseilComponent } from './recetteConseil/recette-conseil/recette-conseil.component';
import { DetailsRecetteComponent } from './recetteConseil/recette/details-recette/details-recette.component';
import { RecetteFormComponent } from './recetteConseil/recette/recette-form/recette-form.component';
import { RecetteListComponent } from './recetteConseil/recette/recette-list/recette-list.component';
import { ConseilService } from './services/conseil.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { Chart, registerables } from 'chart.js';
import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { ProduitFournisseurComponent } from './ProduitRepas/produit-fournisseur/produit-fournisseur.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';
import { ProduitShopComponent } from './ProduitRepas/produit-shop/produit-shop.component';
import { AddproduitComponent } from './ProduitRepas/addproduit/addproduit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';
import { AddnutritionComponent } from './ProduitRepas/addnutrition/addnutrition.component';
import { AddNutrRepasComponent } from './ProduitRepas/add-nutr-repas/add-nutr-repas.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ShowProduitNutritionComponent } from './ProduitRepas/show-produit-nutrition/show-produit-nutrition.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { TokenInterceptorService } from './service/token-interceptor.service';
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
    AddrepasComponent,
    ProduitFournisseurComponent,
    RepasRestaurantComponent,
    ProduitShopComponent,
    AddproduitComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddnutritionComponent,
    AddNutrRepasComponent,
    ProfileUserComponent,
    AdduserComponent,
    PiechartComponent,
    ShowProduitNutritionComponent,
    UnauthorizedComponent,

    //sabra
    AddLivraisonComponent,
    SecondaryNavbarComponent,
    LeftSideBarComponent,
    RecetteListComponent,
    RecetteFormComponent,
    ConseilListComponent,
    ConseilDetailComponent,
    ConseilFromComponent,
    ObjectifListComponent,
    ObjectifFormComponent,
    ObjectifDetailComponent,
    IngredientFormComponent,
    IngredientListComponent,
    IngredientDetailComponent,
    //sabra end
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
