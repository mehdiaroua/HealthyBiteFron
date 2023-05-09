import { Component } from '@angular/core';
import { User } from '../Class/user';
import { UserService } from '../Service1/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  user: User = new User();
  code!: string;
  newPassword!: string;
  passwordReset = false;
  errorMessage = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    console.log('Submitting reset password form');
    this.userService.sendSMS(this.user).subscribe(
      (result) => {
        this.user = result;
        this.resetPassword();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  resetPassword() {
    console.log('User object:', this.user);
    console.log('Reset code:', this.code);
    console.log('New password:', this.newPassword);
    
    this.userService.resetPasswordBySms(this.user, this.code, this.newPassword).subscribe(
      () => {
        this.passwordReset = true;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
  
}
