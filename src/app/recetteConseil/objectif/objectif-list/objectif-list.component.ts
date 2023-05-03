import { Component, OnInit } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-objectif-list',
  templateUrl: './objectif-list.component.html',
  styleUrls: ['./objectif-list.component.css'],
})
export class ObjectifListComponent implements OnInit {
  objectifList: Object[] = [];
  constructor(private objectifService: ObjectifService) {}

  ngOnInit(): void {
    this.objectifService
      .getAll()
      .subscribe((data) => (this.objectifList = data));
  }
}
