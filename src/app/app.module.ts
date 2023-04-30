import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AddLivraisonComponent } from './Commande/add-livraison/add-livraison.component';
import { ReactiveFormsModule,FormGroup, FormControl, FormsModule } from '@angular/forms';
import { UpdateLivraisonComponent } from './Commande/update-livraison/update-livraison.component';


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
    AddLivraisonComponent,
    UpdateLivraisonComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule ,
    FormGroup, FormControl,   
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
