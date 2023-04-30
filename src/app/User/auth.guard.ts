import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:UserService, private route:Router){

  }
  canActivate(){
    if(this.service.isLoggedIn()){
      return true;
    }else{
      this.route.navigate(["/login"]);
      return false;
    }
    
  }
  
}
