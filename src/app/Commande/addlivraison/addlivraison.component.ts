import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';
import { Livraison } from 'src/app/models commandeLivraison/Livraison';

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
  constructor(private service: AppService, private router: Router,  private form: FormBuilder) { 
  


  }
  public ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formLivraison = this.form.group({
      etatCommande: ['', [Validators.required]],
      adresseLivraison: ['', [Validators.required]],
      deliveryTimeSlot: ['', [Validators.required]]})

  }
  save() {
    this.service.addLivraison(this.formLivraison.value.etatCommande, this.formLivraison.value.adresseLivraison, this.formLivraison.value.deliveryTimeSlot)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  
    // this.livraison = new Livraison();
    // this.router.navigate(['/shop']);
  }
  onSubmit() {
    this.submitted = true;
     this.save();
    console.log("form value :" , this.formLivraison.value)
  }
}
