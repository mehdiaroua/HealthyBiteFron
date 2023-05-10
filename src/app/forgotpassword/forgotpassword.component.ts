import { Component } from '@angular/core';
import { UserService } from '../Service1/user.service';
import { User } from '../Class/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  code!: string;
  newPassword!: string;
  passwordReset = false;
  errorMessage = '';
  showAdditionalInputs = false;

  user: User = new User();
  smsSent = false;
  constructor(private userService: UserService, private route:Router) {}

 
  onSubmit(phoneForm: NgForm) {
    if (phoneForm.valid) { // check if phone number is valid
      this.userService.sendSMS(this.user).subscribe(
        (result) => {
          this.user = result;
          this.smsSent = true;

          this.route.navigate(['/reset']); // navigate to reset page only if smsSent is true
        },
        (error) => {
          // handle error here
          console.log('Error sending SMS:', error);
        }
      );
    }
  }
  onSubmit1() {
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
  goToLogin() {
      this.route.navigate(['/login']);
    
  }
  
  resetPassword() {
    this.userService.resetPasswordBySms(this.user, this.code, this.newPassword).subscribe(
      () => {
        this.passwordReset = true;
        this.goToLogin();
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
  
  
// sendSms() {
//   this.userService.sendSms(this.phoneNumber).subscribe(
//     response => console.log(response),
//     error => console.log(error)
//   );
// }


}
