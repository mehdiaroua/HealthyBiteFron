import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';


@Component({
  selector: 'add-livraison',
  templateUrl: './add-livraison.component.html',
  styleUrls: ['./add-livraison.component.css'],
  providers: [AppService],
})
export class AddLivraisonComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    adresse: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    deliveryTimeSlot: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addLivraison(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }

}
