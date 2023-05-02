import { Component, OnInit } from '@angular/core';
import { Conseil } from 'src/app/Models/RepasProduit/Models/RecetteConseil/conseil.model';
import { ConseilService } from 'src/app/services/conseil.service';

@Component({
  selector: 'app-recette-conseil',
  templateUrl: './recette-conseil.component.html',
  styleUrls: ['./recette-conseil.component.css']
})
export class RecetteConseilComponent implements OnInit {

  public listConseil: Conseil[] = [];

  constructor(private conseilService: ConseilService) { }

  // LifeCycle Hook: methode execute par defaut dans angular 
  ngOnInit(): void {
    
    this.conseilService.getAll().subscribe((data) => {
      this.listConseil = data;
      console.log(data);
    })
  }



}
