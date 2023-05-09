import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conseil } from 'src/app/Models/RepasProduit/Models/RecetteConseil/conseil.model';
import { StorageService } from 'src/app/Service1/storage.service';
import { ConseilService } from 'src/app/services/conseil.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent implements OnInit {
  private userId!: number;
  recommendations: Conseil[] = [];
  constructor(
    private router: Router,
    private conseilService: ConseilService,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.userId = this.storageService.getUser().id;
    this.conseilService
      .conseilRecommendations(this.userId)
      .subscribe((data) => {
        this.recommendations = data;
      });
  }
  checkConseilDetails(id?: any) {
    this.router.navigateByUrl('conseil/' + id!);
  }
}
