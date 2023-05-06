import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
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
import { MatDialogModule } from '@angular/material/dialog';
import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProduitShopComponent } from './ProduitRepas/produit-shop/produit-shop.component';
import { AddproduitComponent } from './ProduitRepas/addproduit/addproduit.component';
import { ProduitFournisseurComponent } from './ProduitRepas/produit-fournisseur/produit-fournisseur.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';
import { AddnutritionComponent } from './ProduitRepas/addnutrition/addnutrition.component';
import { AddNutrRepasComponent } from './ProduitRepas/add-nutr-repas/add-nutr-repas.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { PiechartComponent } from './piechart/piechart.component';
import {Chart} from 'chart.js'
import { MenuModule } from 'primeng/menu';
import { InputNumberModule } from 'primeng/inputnumber';

import { registerables } from 'chart.js';
import { ShowProduitNutritionComponent } from './ProduitRepas/show-produit-nutrition/show-produit-nutrition.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
Chart.register(...registerables);
import { MatMenuModule } from '@angular/material/menu';

import { FeedComponent } from './post-comment/feed/feed.component';
import {MatSelectModule} from '@angular/material/select';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';

import { PostDetailsComponent } from './post-comment/post-details/post-details.component';
import { UpdatePostComponent } from './post-comment/update-post/update-post.component';
import { CommentsComponent } from './post-comment/comments/comments.component';
import { AddpostComponent } from './post-comment/addpost/addpost.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MatCardModule } from '@angular/material/card';
import { NotificationComponent } from './notification/notification.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ReponseListComponent } from './reponse-list/reponse-list.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { AddReponseReclamationComponent } from './add-reponse-reclamation/add-reponse-reclamation.component';
import { EditReponseComponent } from './edit-reponse/edit-reponse.component';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';

import { MatFormFieldModule } from '@angular/material/form-field';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { ReclamationUserComponent } from './reclamation-user/reclamation-user.component';
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
    FeedComponent,
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
    AddpostComponent,
    PostDetailsComponent,
    UpdatePostComponent,
    CommentsComponent,
    NotificationComponent,
    ReclamationListComponent,
    ReponseListComponent,
    AddReclamationComponent,
    ReclamationDetailComponent,
    AddReponseReclamationComponent,
    EditReponseComponent,
    EditReclamationComponent,
    ReclamationUserComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
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
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CheckboxModule,
    InputSwitchModule,
    MultiSelectModule,
    MatSelectModule,
    SidebarModule,
    MenuModule,
    MessagesModule,
    PasswordModule,
    InputTextModule,
    InputNumberModule,
    MatCardModule
  ],

  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
