import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Objectif } from 'src/app/Models/RepasProduit/Models/RecetteConseil/objectif.model';
import { ObjectifService } from 'src/app/services/objectif.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ConseilService } from 'src/app/services/conseil.service';
import { Conseil } from 'src/app/Models/RepasProduit/Models/RecetteConseil/conseil.model';

@Component({
  selector: 'app-objectif-detail',
  templateUrl: './objectif-detail.component.html',
  styleUrls: ['./objectif-detail.component.css'],
})
export class ObjectifDetailComponent implements OnInit {
  public objectif: Objectif = {};
  private objectifId!: number;
  public conseilForm!: UntypedFormGroup;
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private objectifService: ObjectifService,
    private formBuilder: UntypedFormBuilder,
    private conseilService: ConseilService
  ) {}

  ngOnInit(): void {
    this.objectifId = this.route.snapshot.params['id'];
    this.initConseilForm();
    this.loadData();
  }
  initConseilForm() {
    this.conseilForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }
  private loadData() {
    this.objectifService.getById(this.objectifId).subscribe((data) => {
      this.objectif = data;
    });
  }
  back() {
    this.router.navigateByUrl('objectif');
  }
  ajouterConseil() {}

  onSubmit() {
    const conseilToSave: Conseil = {
      title: this.conseilForm.get('title')?.value,
      description: this.conseilForm.get('description')?.value,
    };
    this.conseilService
      .addConseilToObjectif(this.objectifId, conseilToSave)
      .subscribe((data) => {
        this.loadData();
        this.conseilForm.reset();
        this.conseilForm.markAsPristine();
        this.closeModal.nativeElement.click();
      });
  }

  checkConseilDetails(id?: number) {
    this.router.navigateByUrl('conseil/' + id!);
  }
  deleteConseil(id?: number) {
    this.conseilService.delete(id!).subscribe(() => {
      this.loadData();
      // this.conseilService
      //   .getConseilPerObjectif(this.objectifId)
      //   .subscribe((data) => {
      //     this.objectif.conseils = data;
      //   });
    });
  }
  onCancelAddConseil() {
    this.conseilForm.reset();
    this.conseilForm.markAsPristine();
    this.closeModal.nativeElement.click();
  }
}
