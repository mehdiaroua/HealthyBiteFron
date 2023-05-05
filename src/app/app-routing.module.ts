import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { RecetteConseilComponent } from './recetteConseil/details-recette/recette-conseil/recette-conseil.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { DetailsRecetteComponent } from './recetteConseil/details-recette/details-recette.component';
import { NotificationComponent } from './notification/notification.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { AddReponseReclamationComponent } from './add-reponse-reclamation/add-reponse-reclamation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "shop", component: ShopComponent },
  { path: "blog", component: RecetteConseilComponent },
  { path: "blogDetails", component: DetailsRecetteComponent },
  { path: "details", component: DetailsComponent },
  { path: "panier", component: PanierComponent },
  { path: "checkout", component: PaiementComponent },
  { path: "Notification", component: NotificationComponent },
  { path: "Reponses", component: ReponseListComponent },
  { path: "Reclamations", component: ReclamationListComponent },
  { path: 'reclamationDetails/:param', component: ReclamationDetailComponent },
  { path: 'AddReclamation', component: AddReclamationComponent },
  { path: 'addReponse/:idReclamation', component: AddReponseReclamationComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
