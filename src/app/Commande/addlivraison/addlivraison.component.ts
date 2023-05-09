import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/AppService';
import { LivraisonService } from 'src/app/LivraisonService';
import { Livraison } from 'src/app/Models/Livraison';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-addlivraison',
  templateUrl: './addlivraison.component.html',
  styleUrls: ['./addlivraison.component.css'],

  providers:[MessageService,StorageService,AppService]
})
export class AddlivraisonComponent {
  livraison! : Livraison ;
  formLivraison: FormGroup | any;
  submitted = false;
  deliveryForm: FormGroup| any;
  public liv: string='';
  user!:any;
  title = 'geolocation-app';

  api_key = 'YOUR API KEY';
  ipAddress: string = '';
  city: string = '';
  region: string = '';
  country: string = '';

  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;
  constructor(private service: LivraisonService, private router: Router,  private form: FormBuilder, private userService:StorageService,private messageService:MessageService,private http:HttpClient) { 
    


  }
  public ngOnInit() {
    this.initForm();
    this.initdeliveryForm();
    this.user = this.userService.getUser();
     console.log(this.user);
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
  
     this.livraison = new Livraison();
    // this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Produit Ajouté avec Succés' });
     this.router.navigate(['/paiement']);
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

  getGeolocationData()

  {

    this.http.get(this.url).subscribe((res:any)=>{

      this.ipAddress = res.data.ip_address;

      this.city = res.data.city;

      this.region = res.data.region;

      this.country = res.data.country;

    });

  }

}
