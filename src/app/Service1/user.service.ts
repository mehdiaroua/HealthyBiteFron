import {  ERole, Role, User } from '../Class/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';



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

  data : Date = new Date();

  currentUser!: User;
  reponsedata: any;


  constructor(private http:HttpClient,private route:Router) { }




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
        this.route.navigate(['repas/restaurant']);
        break;
      case ERole.ROLE_FOURNISSEUR:
        this.route.navigate(['/fournisseur']);
        break;
      default:
        this.route.navigate(['/home']);
        break;
    }
  }
  confirmAccount(token: string): Observable<any> {
    const url = `http://localhost:8080/api/auth/confirm-account?token=${token}`;
    return this.http.post(url, null);
  }

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
    return sessionStorage.getItem('auth-user')!=null;
  }

  GetToken(){
    return sessionStorage.getItem('auth-user')||'';


  }

  haveAccess(requiredRoles: ERole[]): boolean {
    const user = JSON.parse(sessionStorage.getItem('auth-user') || '');
    if (user && user.accessToken) {
      const roles = user.roles;
      for (const requiredRole of requiredRoles) {
        if (roles.includes(requiredRole)) {
          return true;
        }
      }
    }
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
    getAllRolesWithUserCounts(): Observable<any> {
      const url = `${this.otherurl}/count`;
      return this.http.get(url);
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
  return this.http.get<User>(`http://localhost:8080/api/test/getUserById/${id}`);
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
getAllRoles(): Observable<string[]> {
  return this.http.get<string[]>(`${this.otherurl}/roles`);
}
addUser(signUpRequest: any): Observable<any> {
  return this.http.post<any>(`${this.otherurl}/add`, signUpRequest);
}


getUserRoles(userId: number): Observable<string[]> {
  return this.http.get<ERole[]>(`${this.otherurl}/${userId}/roles`)
    .pipe(
      map((roles: ERole[]) => roles.map(role => role.toString()))
    );
}
updateUserRole(userId: number, roleName: string): Observable<any> {
  return this.http.put(`${this.otherurl}/${userId}/role/${roleName}`, null);
}


getRoleByName(name: string): Observable<Role> {
  return this.http.get<Role>(`${this.otherurl}/${name}`);
}
}

