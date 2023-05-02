import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ERole, User } from '../Class/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  
  
  data : Date = new Date();
    
    
    reponsedata: any;
    errorMessage: string = '';
  
  user: User = new User();
 
  signupForm: FormGroup;
  password: any;
  username: any;
    

    constructor(private service:UserService, private route:Router, private formBuilder: FormBuilder,private http: HttpClient) {
      this.signupForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        role: [[{ id: 1, name: ERole.ROLE_ADMIN }], Validators.required]
      });
    }

  signup() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.phone = this.signupForm.value.phone;
    this.user.role = [this.signupForm.value.role];

    this.http.post<any>('http://localhost:8080/api/auth/signup', this.user, httpOptions)
      .subscribe(
        response => {
          console.log('User registered:', response);
          this.route.navigate(['/login']);
        },
        error => {
          this.errorMessage = error.error.message;
        }
      );
  }
}