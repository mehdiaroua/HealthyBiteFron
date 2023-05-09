import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReponseReclamation } from '../Models/ReclamationEtReponse/ReponseReclamation';
import { ReponseReclamationService } from '../Service/reponse-reclamation.service';

@Component({
  selector: 'app-edit-reponse',
  templateUrl: './edit-reponse.component.html',
  styleUrls: ['./edit-reponse.component.css']
})
export class EditReponseComponent  {

  reponse: any

  constructor(
    private service: ReponseReclamationService,
    private dialogRef: MatDialogRef<EditReponseComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(textReponseReclamation => {
      this.reponse = textReponseReclamation;
    })
  }


  update() {
    
  
    this.service.update(this.reponse).subscribe(r => this.dialogRef.close())
  }

  

}
