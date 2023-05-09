import { ReclamationService } from '../Service1/reclamation.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent {
  reclamation: any

  constructor(
    private service: ReclamationService,
    private dialogRef: MatDialogRef<EditReclamationComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(textReclamation => {
      this.reclamation = textReclamation;
    })
  }


  update() {


    this.service.update(this.reclamation).subscribe(r => this.dialogRef.close())
  }



}

