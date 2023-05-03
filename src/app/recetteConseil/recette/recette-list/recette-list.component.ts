import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from 'src/app/Models/RepasProduit/Models/RecetteConseil/recette.model';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css'],
})
export class RecetteListComponent implements OnInit {
  public recetteList: Recette[] = [];
  constructor(
    private recetteService: RecetteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.recetteService.getAll().subscribe((data) => {
      this.recetteList = data;
    });
  }

  checkDetails(id?: number) {
    this.router.navigateByUrl(`/recette/${id}`);
  }
  add() {
    this.router.navigateByUrl('/recette/add');
  }

  edit(id?: number) {
    this.router.navigateByUrl(`recette/${id}/edit`);
  }
  delete(id?: number) {
    this.recetteService.delete(id!).subscribe(() => {
      let index = this.recetteList.findIndex((x) => x.id === id);
      this.recetteList.splice(index, 1);
      this.loadData();
    });
  }
}
