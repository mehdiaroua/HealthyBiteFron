import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLivraisonComponent } from './Commande/add-livraison/add-livraison.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { FooterComponent } from './headers/footer/footer.component';
import { LeftSideBarComponent } from './headers/left-side-bar/left-side-bar.component';
import { NavbarComponent } from './headers/navbar/navbar.component';
import { SecondaryNavbarComponent } from './headers/secondary-navbar/secondary-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './ProduitRepas/shop/shop.component';
import { DetailsComponent } from './ProduitRepas/details/details.component';
import { PanierComponent } from './Commande/panier/panier.component';
import { PaiementComponent } from './Commande/paiement/paiement.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddrepasComponent } from './ProduitRepas/addrepas/addrepas.component';
import { RepasRestaurantComponent } from './ProduitRepas/repas-restaurant/repas-restaurant.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProduitShopComponent } from './ProduitRepas/produit-shop/produit-shop.component';
import { AddproduitComponent } from './ProduitRepas/addproduit/addproduit.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
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
import { EditorModule } from "@tinymce/tinymce-angular";
import { ToastrModule } from 'ngx-toastr';
import { RecetteConseilComponent } from './recetteConseil/recette-conseil/recette-conseil.component';
import { DetailsRecetteComponent } from './recetteConseil/recette/details-recette/details-recette.component';
import { ProduitFournisseurComponent } from './ProduitRepas/produit-fournisseur/produit-fournisseur.component';
import { RecetteListComponent } from './recetteConseil/recette/recette-list/recette-list.component';
import { RecetteFormComponent } from './recetteConseil/recette/recette-form/recette-form.component';
import { ConseilListComponent } from './recetteConseil/conseil/conseil-list/conseil-list.component';
import { ConseilDetailComponent } from './recetteConseil/conseil/conseil-detail/conseil-detail.component';
import { ConseilFromComponent } from './recetteConseil/conseil/conseil-from/conseil-from.component';
import { ObjectifListComponent } from './recetteConseil/objectif/objectif-list/objectif-list.component';
import { ObjectifFormComponent } from './recetteConseil/objectif/objectif-form/objectif-form.component';
import { ObjectifDetailComponent } from './recetteConseil/objectif/objectif-detail/objectif-detail.component';
import { IngredientFormComponent } from './recetteConseil/ingredient/ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './recetteConseil/ingredient/ingredient-list/ingredient-list.component';
import { IngredientDetailComponent } from './recetteConseil/ingredient/ingredient-detail/ingredient-detail.component';
import { RecommendationComponent } from './recetteConseil/recommendation/recommendation.component';
import { TokenInterceptorService } from './Service1/token-interceptor.service';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { CommonModule } from '@angular/common';
import { AddlivraisonComponent } from './Commande/addlivraison/addlivraison.component';

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
    ReclamationUserComponent,
  
    AddlivraisonComponent,
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
    RecommendationComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    TableModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MenuModule,
    InputNumberModule,
    MatMenuModule,
    MatSelectModule,
    SidebarModule,
    InputTextModule,
    InputSwitchModule,
    TooltipModule,
    MessagesModule,
    MatCardModule,
    CheckboxModule,
    MultiSelectModule,
    PasswordModule,
    MatFormFieldModule,
    EditorModule,
    ToastrModule.forRoot(),
    ToastrModule,
    ChipModule,
    CardModule,
    AngularEditorModule

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
