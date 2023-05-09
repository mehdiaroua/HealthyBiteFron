import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conseil } from 'src/app/Models/RepasProduit/Models/RecetteConseil/conseil.model';
import { ConseilService } from 'src/app/services/conseil.service';

@Component({
  selector: 'app-conseil-list',
  templateUrl: './conseil-list.component.html',
  styleUrls: ['./conseil-list.component.css'],
})
export class ConseilListComponent implements OnInit {
  public conseilList: Conseil[] = [];

  constructor(private conseilService: ConseilService, private router: Router) {}

  ngOnInit(): void {
    this.conseilService.getAll().subscribe((data) => {
      this.conseilList = data;
    });
  }
  checkDetails(id?: number) {
    this.router.navigate(['/conseil', id]);
  }

  back() {}
}
