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

import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';
import { UpdaterepasComponent } from './ProduitRepas/updaterepas/updaterepas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    RepasRestaurantComponent,
    UpdaterepasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
