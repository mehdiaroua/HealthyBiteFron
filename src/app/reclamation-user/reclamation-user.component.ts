import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../Service1/reclamation.service';
import { Reclamation } from '../Models/ReclamationEtReponse/Reclamation';
import { StorageService } from '../Service1/storage.service';

@Component({
  selector: 'app-reclamation-user',
  templateUrl: './reclamation-user.component.html',
  styleUrls: ['./reclamation-user.component.css']
})
export class ReclamationUserComponent implements OnInit {

  reclamations!: Reclamation[];
  user!:any;

  constructor(private reclamationService: ReclamationService, private userService:StorageService) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations() {

    const userId = this.user= this.userService.getUser().id;
    this.reclamationService.getAllReclamationsByUser(userId).subscribe(data => {
      this.reclamations = data;
    });
  }

}
