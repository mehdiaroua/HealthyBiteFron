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
import { FormsModule } from '@angular/forms';
import { AddLivraisonComponent } from './commande/add-livraison/add-livraison.component';
import { NotificationComponent } from './notification/notification.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { AddReponseReclamationComponent } from './add-reponse-reclamation/add-reponse-reclamation.component';
import { EditReponseComponent } from './edit-reponse/edit-reponse.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
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
    NotificationComponent,
    ReclamationListComponent,
    ReponseListComponent,
    AddReclamationComponent,
    ReclamationDetailComponent,
    AddReponseReclamationComponent,
    EditReponseComponent,
    EditReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
