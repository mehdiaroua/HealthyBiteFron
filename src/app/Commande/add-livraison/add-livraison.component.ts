import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';
import { Livraison } from 'src/app/models/Livraison';



@Component({
  selector: 'add-livraison',
  templateUrl: './add-livraison.component.html',
  styleUrls: ['./add-livraison.component.css'],
  providers: [AppService],
})
export class AddLivraisonComponent implements OnInit {
  livraison : Livraison = new Livraison() ;
  submitted = false;
 
  constructor(private service: AppService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  data: any


save() {
  this.service.addLivraison(this.livraison) .subscribe(data => console.log(data), error => console.log(error));
  this.livraison = new Livraison();
  this.router.navigate(['/shop']);
}

onSubmit() {
  this.submitted = true;
  this.save();
}



}
