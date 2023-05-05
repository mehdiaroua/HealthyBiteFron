import { Component, OnInit } from '@angular/core';
import { ReponseReclamation } from '../Models/ReclamationEtReponse/ReponseReclamation';
import { ReponseReclamationService } from '../Service/reponse-reclamation.service';
import { Router } from '@angular/router';
import { EditReponseComponent } from '../edit-reponse/edit-reponse.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reponse-list',
  templateUrl: './reponse-list.component.html',
  styleUrls: ['./reponse-list.component.css']
})
export class ReponseListComponent implements OnInit {
  listRponse: ReponseReclamation[] = [];

  constructor(private R: Router, private reponseS: ReponseReclamationService , public dialog: MatDialog) { }

  ngOnInit() {
    this.reponseS.getAllReponse().subscribe(data => this.listRponse = data);
  }

  deleteReponseReclamation(reponse: ReponseReclamation): void {
    if (confirm("Are you sure u want to delete ?")) {
      this.reponseS.deleteReponseReclamation(reponse).subscribe(data => {
        this.listRponse = data;
      });
    }
  }
  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(EditReponseComponent, {
      width: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }



}
