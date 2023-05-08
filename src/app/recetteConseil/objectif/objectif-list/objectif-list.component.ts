import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Objectif } from 'src/app/Models/RepasProduit/Models/RecetteConseil/objectif.model';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css'],
})
export class ObjectifListComponent implements OnInit {
  public objectifList: Objectif[] = [];
  public user: any;
  public editMode: boolean = false;
  public objectifForm!: UntypedFormGroup;
  subjectForUpdateObjectif: Objectif = {};

  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('closeModalEditObjectif') closeModalEditObjectif!: ElementRef;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private objectifService: ObjectifService,
    private router: Router,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.loadData(this.storageService.getUser().id);
    this.initObjectifForm();
  }
  initObjectifForm() {
    this.objectifForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      poidDepart: [null, [Validators.required]],
      poidActuel: [null, [Validators.required]],
      taille: [null, [Validators.required]],
      objectifPoid: [null, [Validators.required]],
      typeActivite: [null, [Validators.required]],
    });
  }
  loadData(id: number) {
    this.objectifService.getObjectifsPerUser(id).subscribe((data) => {
      this.objectifList = data;
    });
  }

  public onShowEditObjectif(id?: number) {
    this.subjectForUpdateObjectif = <Objectif>(
      this.objectifList.filter((i) => i.id === id!)[0]
    );
    console.log('objectif:', this.subjectForUpdateObjectif);
    console.log('subject:', this.subjectForUpdateObjectif);
  }
  public deleteObjectif(id?: number) {
    this.objectifService
      .delete(id!)
      .subscribe(() => this.loadData(this.storageService.getUser().id));
  }
  back() {
    this.router.navigateByUrl('/home');
  }
  onSubmit() {
    const objectifToSave: Objectif = {
      title: this.objectifForm.get('title')?.value,
      poidDepart: this.objectifForm.get('poidDepart')?.value,
      poidActuel: this.objectifForm.get('poidActuel')?.value,
      taille: this.objectifForm.get('taille')?.value,
      objectifPoid: this.objectifForm.get('objectifPoid')?.value,
      typeActivite: this.objectifForm.get('typeActivite')?.value,
    };
    this.objectifService
      .addObjectifToUser(this.storageService.getUser().id, objectifToSave)
      .subscribe(() => {
        this.loadData(this.storageService.getUser().id);
        this.objectifForm.reset();
        this.objectifForm.markAsPristine();
        this.closeModal.nativeElement.click();
      });
  }

  editObjectif() {
    this.objectifService
      .update(this.subjectForUpdateObjectif?.id!, this.subjectForUpdateObjectif)
      .subscribe((data) => {
        this.loadData(this.storageService.getUser().id);
        this.closeModalEditObjectif.nativeElement.click();
      });
  }
  onCancelEditObjectif() {
    this.objectifForm.reset();
    this.objectifForm.markAsPristine();
    this.closeModal.nativeElement.click();
  }
  onCancelAddObjectif() {
    this.objectifForm.reset();
    this.objectifForm.markAsPristine();
    this.closeModal.nativeElement.click();
  }

  checkDetails(id?: number) {
    this.router.navigateByUrl(`/objectif/${id}`);
  }
}
