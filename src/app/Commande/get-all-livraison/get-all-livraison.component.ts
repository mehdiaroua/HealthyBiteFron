import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/AppService';


@Component({
  selector: 'get-all-livraison',
  templateUrl: './get-all-livraison.component.html',
  styleUrls: ['./get-all-livraison.component.css'],
  providers: [AppService],
})
export class GetAllLivraisonComponent implements OnInit {


  Livraisons: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getAllLivraison().subscribe(data => {
      this.Livraisons = data;
     
    })
  }

  deletelivraison(id: number){
    this.service.deleteLivraisonById(id).subscribe(data => {
      this.Livraisons = this.Livraisons?.filter(Livraison => Livraison.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateLivraison(id: number){
    this.router.navigate(['update', id]);
  }


}
