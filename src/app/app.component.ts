import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthyBiteFront';
  api_key = 'YOUR API KEY';

  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;


}
export const environment = {
  production: false,
// Stripe Publishable key
  stripe: 'Your_Publishable_key',
  serverUrl: '/api',
};
