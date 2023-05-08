import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conseil } from 'src/app/Models/RepasProduit/Models/RecetteConseil/conseil.model';
import { ConseilService } from 'src/app/services/conseil.service';

@Component({
  selector: 'app-conseil-detail',
  templateUrl: './conseil-detail.component.html',
  styleUrls: ['./conseil-detail.component.css'],
})
export class ConseilDetailComponent implements OnInit {
  private conseilId!: number;
  conseil!: Conseil;
  subjectForUpdate: Conseil = {};

  @ViewChild('closeModal') closeModal!: ElementRef;
  constructor(
    private conseilService: ConseilService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.conseilId = this.route.snapshot.params['id'];
    this.loadData();
  }
  loadData() {
    this.conseilService.getById(this.conseilId).subscribe((data) => {
      this.conseil = data;
    });
  }
  back() {
    this.location.back();
  }
  showEdit() {
    this.subjectForUpdate = this.conseil;
  }
  onEdit() {
    this.conseilService
      .update(this.conseil.id!, this.subjectForUpdate)
      .subscribe((data) => {
        this.loadData();
        this.closeModal.nativeElement.click();
      });
  }
}
