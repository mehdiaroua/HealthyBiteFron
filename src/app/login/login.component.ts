import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service1/user.service';
import { Router } from '@angular/router';
import { ERole, User } from '../Class/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../Service1/storage.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
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


    constructor(private service:UserService, private route:Router, private formBuilder: FormBuilder,private http: HttpClient, private storageService: StorageService, private messageService:MessageService) {

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


    public navigateToUserRole(role:string[]) {
      if(role.includes(ERole.ROLE_ADMIN)){
        this.route.navigate(['/dash']);

      }
      else if (role.includes(ERole.ROLE_USER) || role.includes(ERole.ROLE_RESTAURANT) || role.includes(ERole.ROLE_FOURNISSEUR)|| role.includes(ERole.ROLE_ADMIN)) {
        this.route.navigate(['/home']);
      }
      else if (role.includes(ERole.ROLE_RESTAURANT))
      this.route.navigate(['/repas/restaurant']);
      else if (role.includes(ERole.ROLE_FOURNISSEUR))
      this.route.navigate(['/produit/fournisseur']);


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
          this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content' });
          this.roles = this.storageService.getUser().roles;
          this.navigateToUserRole(this.roles)

        },
        error: (err: { error: { message: string; }; }) => {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Bad Credentials' });
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;

        }
      });
    }
    reloadPage(): void {
      window.location.reload();
    }



}
