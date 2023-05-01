import { Role } from './../Class/user';
import {  User } from '../Class/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl='http://localhost:8080/api/auth/signin';
  otherurl='http://localhost:8080/api/test';


  constructor(private http:HttpClient) { }
  login(User:any){
    return this.http.post(this.baseurl,User)
  }
  signup(signupData: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/auth/signup`, signupData);
  }
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  
  GetToken(){
    return localStorage.getItem('token')||'';


  }
  
  HaveAcces(){
    var loggintoken=localStorage.getItem('token')||'';
    var _extractedtoken=loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.Role=='admin'){
return true;  }
return false;
    }
    sendSMS(user: User): Observable<any> {
      const url = `http://localhost:8080/api/test/sendsms`;
      return this.http.put(url, { phone: user.phone }).pipe(
        map((response: any) => {
          user.code = response.code;
          return user;
        })
      );
    }

    resetPasswordBySms(user: User, code: string, newPassword: string): Observable<any> {
      const url = `http://localhost:8080/api/test/resetbysms/${code}/${newPassword}`;
      return this.http.put(url, { phone: user.phone }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return throwError('Invalid code.');
          } else {
            return throwError('An error occurred.');
          }
        })
      );

}
logout(): void {
  localStorage.removeItem('token');
}
searchUsersByUsername(username: string): Observable<User[]> {
  const url = `${this.otherurl}/users/search?username=${username}`;
  return this.http.get<User[]>(url);
}
getUserById(id: number): Observable<User> {
  return this.http.get<User>(this.otherurl + 'getUserById/' + id);
}

updateUser(id: number, user: User): Observable<any> {
  return this.http.put(`${this.otherurl}/update/${id}`, user);
}
enableUser(id: number): Observable<any> {
  return this.http.put(`${this.otherurl}/${id}/enable`, null);
}

disableUser(id: number): Observable<any> {
  return this.http.put(`${this.otherurl}/${id}/disable`, null);
}
deleteUser(id: number): Observable<any> {
  return this.http.delete<any>(`http://localhost:8080/api/test/deleteUser/${id}`);
}
getAllUsers(): Observable<any> {
  return this.http.get<any>('http://localhost:8080/api/test/getAllUser');
}
}

