import { Component, OnInit } from '@angular/core';
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

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private objectifService: ObjectifService
  ) {}

  ngOnInit(): void {
    this.loadData(this.storageService.getUser().id);
  }

  loadData(id: number) {
    this.objectifService
      .getObjectifsPerUser(id)
      .subscribe((data) => (this.objectifList = data));
  }

  public onShowEditObjectif(id?: number) {}
  public deleteObjectif(id?: number) {
    this.objectifService
      .delete(id!)
      .subscribe(() => this.loadData(this.storageService.getUser().id));
  }
}
