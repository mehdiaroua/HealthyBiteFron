import { Location } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from 'src/app/Models/RepasProduit/Models/RecetteConseil/recette.model';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css'],
})
export class RecetteFormComponent implements OnInit {
  recetteForm!: UntypedFormGroup;
  recette!: Recette;
  private recetteId!: number;
  constructor(
    private recetteService: RecetteService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.recetteId = this.route.snapshot.params['id'];
    if (this.recetteId) {
      this.recetteService.getById(this.recetteId).subscribe((data: Recette) => {
        this.recette = data;
      });
    } else {
      this.initForm(null);
    }
  }
  initForm(nom: string | null | undefined) {
    this.recetteForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
    });
  }

  onSubmit() {
    let recetteToSave: Recette = {
      id: 0,
      nom: this.recetteForm.get('nom')?.value,
    };

    this.recetteService.create(recetteToSave).subscribe((data) => {
      this.router.navigateByUrl('/recette');
    });
  }
  onCancel() {
    this.router.navigateByUrl('/recette');
  }
  onUpdate() {
    this.recetteService.update(this.recette.id!, this.recette).subscribe(() => {
      this.router.navigateByUrl('/recette');
    });
  }

  back() {
    this.router.navigateByUrl('/recette');
  }
}
