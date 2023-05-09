import { Component, OnInit } from '@angular/core';
import { Notification } from '../Models/ReclamationEtReponse/Notification';
import { NotificationService } from '../Service1/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  listNotification!: Notification[];

  constructor(private R: Router, private notificationS: NotificationService) { }

  ngOnInit() {
    this.notificationS.getAllNotification().subscribe(data => this.listNotification = data);
  }
  
  deleteNotification(notification: Notification): void {
    if (confirm("Are you sure u want to delete ?")) {
      this.notificationS.deleteNotification(notification).subscribe(data => {
        this.listNotification = data;
      });
    }
  }

}
