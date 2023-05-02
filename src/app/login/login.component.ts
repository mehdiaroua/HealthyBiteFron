import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ERole, User } from '../Class/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  user: User = new User();

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  
  formSubmitted = false;

    data : Date = new Date();
    
    currentUser!: User;
    reponsedata: any;
  
  
  
  userService: any;
    

    constructor(private service:UserService, private route:Router, private formBuilder: FormBuilder,private http: HttpClient, private storageService: StorageService) {
      
    }
   /* getCurrentUser() {
      const token = sessionStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        this.http.get<User>('http://localhost:8080/api/auth/user', { headers }).subscribe(
          data => {
            this.currentUser = data;
            this.navigateToUserRole();
          },
          error => {
            console.log(error);
          }
        );
      }
    }*/
    
    
    public navigateToUserRole() {
      const role = this.currentUser.role[0].name;
      switch (role) {
        case ERole.ROLE_ADMIN:
          this.route.navigate(['/dash']);
          break;
        case ERole.ROLE_MODERATOR:
          this.route.navigate(['/moderator']);
          break;
        case ERole.ROLE_RESTAURANT:
          this.route.navigate(['/restaurant']);
          break;
        case ERole.ROLE_FOURNISSEUR:
          this.route.navigate(['/fournisseur']);
          break;
        default:
          this.route.navigate(['/home']);
          break;
      }
    }
    
    
    
    ngOnInit() {
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      }
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    goToRegistration() {
      this.route.navigate(['/register']);
    }
    goToForgot() {
      this.route.navigate(['/forgot']);
    }
    onSubmit(): void {
      const { username, password } = this.form;
  
      this.service.login(username, password).subscribe({
        next: (data: any) => {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;

        },
        error: (err: { error: { message: string; }; }) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
    reloadPage(): void {
      window.location.reload();
    }
      
      

}
