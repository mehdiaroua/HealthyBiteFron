import {  User } from '../Class/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl='http://localhost:8080/api/auth/signin';
  otherurl='http://localhost:8080/api/test';


  constructor(private http:HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  signup(signupData:any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/auth/signup`, signupData, httpOptions);
  }
  logout(): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signout', { }, httpOptions);
  }
  
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  
  GetToken(){
    return localStorage.getItem('token')||'';


  }
  
  HaveAcces(){
//     var loggintoken=sessionStorage.getItem('token')||'';
//     var _extractedtoken=loggintoken.split('.')[1];
//     var _atobdata=atob(_extractedtoken);
//     var _finaldata=JSON.parse(_atobdata);
//     if(_finaldata.Roles=='admin'){
// return true;  }
// return false;
const user=JSON.parse(sessionStorage.getItem('auth-user')||'');
console.log({user})
if(user !== '')
var _extractedtoken=user.accessToken;
// console.log(user.roles=== 'ROLE_ADMIN')
// if(user.roles.includes('admin')){
// return true; 
//  }
// return false;
console.log(user.roles[0] === 'ROLE_ADMIN')
return user.roles[0] === 'ROLE_ADMIN'
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

//logout(): void {
  //localStorage.removeItem('token');
//}
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

