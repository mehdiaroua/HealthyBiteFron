import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from 'src/app/Models/RepasProduit/Models/RecetteConseil/recette.nodel';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css'],
})
export class RecetteListComponent implements OnInit {
  public recetteList: Recette[] = [];
  constructor(private recetteService: RecetteService, private router: Router) {}

  ngOnInit(): void {
    this.recetteService.getAll().subscribe((data) => {
      this.recetteList = data;
    });
  }

  checkDetails(id?: number) {
    console.log('id:', id);
    this.router.navigate(['/recette', id]);
  }
}
