import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../Service/reclamation.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit{

  reclamation: any = {};
  user!:any;
  constructor(private reclamationS: ReclamationService, private R: Router,private route: ActivatedRoute,private userService:StorageService) { }
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  onSubmit() {
    const id = +this.route.snapshot.params['id']; 
    this.user =  this.user = this.userService.getUser().id;
    this.reclamationS.assignRepasToReclamation(this.reclamation,id,this.user).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.reclamation = {};
    this.R.navigate(['Reclamations']);
  }




}
