import { Component } from '@angular/core';
import { ReclamationService } from '../Service/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {

  reclamation: any = {};

  constructor(private reclamationS: ReclamationService, private R: Router) { }

  onSubmit() {
    this.reclamationS.addReclamtion(this.reclamation).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.reclamation = {};
    this.R.navigate(['Reclamations']);
  }


  

}
