import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { UserService } from '../service/user.service';
import { User } from '../Class/user';
import { RepasProduitService } from '../repasProduit.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
  providers: [MessageService]
})
export class ProfileUserComponent implements OnInit {

  user:any;
  maxCalories!: any;

  constructor(private storageService:StorageService, private userService:UserService,private repasService:RepasProduitService,private messageService:MessageService){}


  ngOnInit(): void {
    this.user= this.storageService.getUser();
    console.log(this.user);
    this.maxCalories = this.calculerMaxCalories();
    this.userService.getUserById(this.storageService.getUser().id).subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
    });

  }
  GetUserObjects(){
    this.userService.getUserById(this.storageService.getUser().id).subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
    });
  }
  calculerMaxCalories(): void {
    this.repasService.calculerMaxCalories(this.user.id).subscribe(
      (maxCalories: number) => {
        this.maxCalories = maxCalories;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Le nombre maximal de calories pour vous est : ${maxCalories}` });

        console.log(`Le nombre maximal de calories pour vous est : ${maxCalories}`);
      },
      (error: any) => {
        console.error(`Une erreur est survenue : ${error}`);
      }
    );
  }




}







