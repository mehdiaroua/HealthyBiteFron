import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { FooterComponent } from './headers/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/recette/details-recette/details-recette.component';
import { HttpClientModule } from '@angular/common/http';
import { AddLivraisonComponent } from './Commande/add-livraison/add-livraison.component';
import { ConseilService } from './services/conseil.service';
import { SecondaryNavbarComponent } from './headers/secondary-navbar/secondary-navbar.component';
import { LeftSideBarComponent } from './headers/left-side-bar/left-side-bar.component';
import { RecetteConseilComponent } from './recetteConseil/recette-conseil/recette-conseil.component';
import { RecetteFormComponent } from './recetteConseil/recette/recette-form/recette-form.component';
import { RecetteListComponent } from './recetteConseil/recette/recette-list/recette-list.component';

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
    SecondaryNavbarComponent,
    LeftSideBarComponent,
    RecetteListComponent,
    RecetteFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ConseilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
