import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';
import { User } from 'src/app/Class/user';


import { StorageService } from 'src/app/service/storage.service';
import { Commande } from '../models/Commande';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
  user!:User;
  formCommande: FormGroup | any;
  submitted = false;
  CommandeForm: FormGroup| any;
  commande! : Commande ;
  constructor( private userService:StorageService ,  private form: FormBuilder, private router: Router, private service:AppService ) { 
    


  }
  public ngOnInit() {
    this.initForm();
    this.user = this.userService.getUser();
     console.log(this.user);
  }
  initForm(){
    this.formCommande = this.form.group({
      etatCommande: ['', [Validators.required]],
      dateCommande: ['', [Validators.required]],
      total: ['', [Validators.required]],
     })

  }
  
}
