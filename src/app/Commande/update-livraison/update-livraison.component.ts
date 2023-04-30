import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from 'src/app/AppService';
import { Livraison } from '../../models commandeLivraison/Livraison';


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
    this.service.getLivraisonById(id).subscribe(data => {
      this.livraison = data
      console.log(this.livraison)
    })
  }

  

  submit(){
    this.data = this.form.value
   
    
    this.service.updateLivraison(this.data).subscribe;

    this.router.navigate(['/']);
  }


}
