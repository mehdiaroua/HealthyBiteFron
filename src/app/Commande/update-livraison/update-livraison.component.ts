import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators ,ReactiveFormsModule,FormsModule, FormGroup } from '@angular/forms';

import { AppService } from 'src/app/AppService';
import { Livraison } from '../../models/Livraison';


@Component({
  selector: 'update-livraison',
  templateUrl: './update-livraison.component.html',
  styleUrls: ['./update-livraison.component.css']
})
export class UpdateLivraisonComponent implements OnInit {

 livraison? : Livraison
  data: any;
  form: any;

  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      adresse: new FormControl('', [Validators.required]),
      etat: new FormControl('', [Validators.required]),
      deliveryTimeSlot: new FormControl('', [Validators.required])
    });
    this.service.getLivraisonById(id).subscribe(data => {
      this.livraison = data
    })
  }

  

  submit(){
    this.data = this.form.value
   
    
    this.service.updateLivraison(this.data).subscribe;

    this.router.navigate(['/']);
  }


}
