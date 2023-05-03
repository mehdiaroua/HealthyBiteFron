import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { UserService } from '../service/user.service';
import { User } from '../Class/user';
import { RepasProduitService } from '../repasProduit.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  user:any;


  constructor(private storageService:StorageService, private userService:UserService,private repasService:RepasProduitService){}


  ngOnInit(): void {
    this.user= this.storageService.getUser();
    console.log(this.user);

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
    this.user = this.GetUserObjects();
    if (this.user !== null) {
      this.repasService.calculerMaxCalories(this.user).subscribe(
        (maxCalories: number) => {
          console.log(`Le nombre maximal de calories pour vous est : ${maxCalories}`);
        },
        (error: any) => {
          console.error(`Une erreur est survenue : ${error}`);
        }
      );
    } else {
      console.error(`L'objet user est null`);
    }
  }




}







