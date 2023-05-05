import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Notification } from '../Models/ReclamationEtReponse/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  listNotification: Notification[] = [];
  readonly URL = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }
  getAllNotification() {
    return this.httpClient.get<Notification[]>(this.URL + "api/test/retrieveAllNotification");
  }
  deleteNotificationById(idNotification: number) {
    return this.httpClient.delete(this.URL + "api/test/deleteNotification" + idNotification);
}
  deleteNotification(notification: Notification) {
    return this.httpClient.delete<Notification>(`${this.URL}api/test/deleteNotification/${notification.idNotification}`)
      .pipe(map(() => {
        return this.listNotification.filter(r => r !== notification);
      }));
  }


}
