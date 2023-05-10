import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../Service1/reclamation.service';
import { Reclamation } from '../Models/ReclamationEtReponse/Reclamation';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditReclamationComponent } from '../edit-reclamation/edit-reclamation.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css'],
    providers: [MessageService]
})
export class ReclamationListComponent implements OnInit {
  listReclamation!: Reclamation[];

  constructor(private messageService: MessageService,private R: Router, private reclamationS: ReclamationService, public dialog: MatDialog) { }

  ngOnInit() {
    this.reclamationS.getAllReclamation().subscribe(data => this.listReclamation = data);
    this.archiveReclamationsNonTraitees();
  }
  archiveReclamationsNonTraitees() {
    this.reclamationS.archiveReclamationsNonTraitees().subscribe(
      () => {
        console.log('Réclamations traitées archivées avec succès');
      },
      error => {
        console.error('Une erreur est survenue lors de l\'archivage des réclamations traitées : ', error);
      }
    );
  }
  repondre(idReclamation: number) {
    this.R.navigate(['addReponse', idReclamation]);
  }
  
  showDetails(idReclamation: number) {
    this.R.navigate(['reclamationDetails', idReclamation], { queryParams: { 'name': 'test' } });
  }

 

   deleteReclamation(reclamation: Reclamation): void {
    if (confirm("Are you sure u want to delete ?")) {
      this.reclamationS.deleteReclamation(reclamation).subscribe(data => {
        this.listReclamation = data;
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Reclaim Deleted successfully!' });
        setTimeout(() => {
          location.reload();
        }, 1000);
        
      });
    }
  }
  


}
