import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ERole, User } from '../Class/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formSubmitted = false;

    data : Date = new Date();
    
    currentUser!: User;
    reponsedata: any;
    errorMessage: string = '';
  
  user: User = new User();
 
  signupForm: FormGroup;
  password: any;
  username: any;
  userService: any;
    

    constructor(private service:UserService, private route:Router, private formBuilder: FormBuilder,private http: HttpClient) {
      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        phone: ['', Validators.required],
        role: [[{id: 1, name: ERole.ROLE_ADMIN}], Validators.required]
      });
    }
    getCurrentUser() {
      const token = localStorage.getItem('token');
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
    }
    
    
    private navigateToUserRole() {
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
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
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
    login() {
      const user = {
        username: this.username,
        password: this.password
      };
       
  
    
      this.service.login(user).subscribe(data => {
        if (data != null) {
          this.reponsedata = data;
          localStorage.setItem('token', this.reponsedata.accessToken);
          this.getCurrentUser(); // Get the current user information
        }
      });
    }
      
      

}
