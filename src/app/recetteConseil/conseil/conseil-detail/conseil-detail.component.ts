import { Component, OnInit } from '@angular/core';
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
  constructor(
    private conseilService: ConseilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.conseilId = this.route.snapshot.params['id'];
    this.conseilService.getById(this.conseilId).subscribe((data) => {
      this.conseil = data;
    });
  }
}
