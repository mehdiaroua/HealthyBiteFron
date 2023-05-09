import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  constructor(private router: Router) { 
    


  }
  onSubmit(){
     this.router.navigate(['/bbb']);
  }
}
