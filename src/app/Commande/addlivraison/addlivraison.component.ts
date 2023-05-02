import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';
import { Livraison } from 'src/app/Models/Livraison';

@Component({
  selector: 'app-addlivraison',
  templateUrl: './addlivraison.component.html',
  styleUrls: ['./addlivraison.component.css'],
  providers: [AppService],
})
export class AddlivraisonComponent {
  livraison! : Livraison ;
  formLivraison: FormGroup | any;
  submitted = false;
  deliveryForm: FormGroup| any;
  public liv: string='';
  constructor(private service: AppService, private router: Router,  private form: FormBuilder) { 
    


  }
  public ngOnInit() {
    this.initForm();
    this.initdeliveryForm();
  }
  initForm(){
    this.formLivraison = this.form.group({
      etatCommande: ['', [Validators.required]],
      adresseLivraison: ['', [Validators.required]],
      deliveryTimeSlot: ['', [Validators.required]],
      collectionPoint: ['', [Validators.required]]})

  }
  initdeliveryForm(){
  this.deliveryForm = this.form.group({
    status: ['', Validators.required],
    relayPointInput: [''],
    homeAddressInput: ['']
  })}
  save() {
    this.service.addLivraison(this.formLivraison.value.etatCommande, this.formLivraison.value.adresseLivraison, this.formLivraison.value.deliveryTimeSlot,this.formLivraison.value.collectionPoint)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  
    // this.livraison = new Livraison();
   //  this.router.navigate(['/paiement']);
  }
  onSubmit() {
    this.submitted = true;
     this.save();
    console.log("form value :" , this.formLivraison.value)
  }
  livraisonPointrelais(){
    this.liv='pointRelais';
  }
  livraisonAdresse(){
    this.liv='adresse';
  }

    

}
