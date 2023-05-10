import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../Service1/reclamation.service';
import { Reclamation } from '../Models/ReclamationEtReponse/Reclamation';
import { MatDialog } from '@angular/material/dialog';
import { EditReclamationComponent } from '../edit-reclamation/edit-reclamation.component';
import { StorageService } from '../Service1/storage.service';


@Component({
  selector: 'app-reclamation-user',
  templateUrl: './reclamation-user.component.html',
  styleUrls: ['./reclamation-user.component.css']
})
export class ReclamationUserComponent implements OnInit {

  reclamations!: Reclamation[];
  user!:any;

  constructor(private reclamationService: ReclamationService, private userService: StorageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations() {

    const userId = this.user= this.userService.getUser().id;
    this.reclamationService.getAllReclamationsByUser(userId).subscribe(data => {
      this.reclamations = data;
    });
  }
   openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(EditReclamationComponent, {
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
