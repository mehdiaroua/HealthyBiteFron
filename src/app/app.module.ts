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
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './UserBack/dashboard.component';




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
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent
  
        
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule

       
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
