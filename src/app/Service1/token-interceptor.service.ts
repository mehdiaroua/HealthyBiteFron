import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { EventBusService } from './event-bus.service';
import { EventData } from './event';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  private isRefreshing = false;

  constructor(private storageService: StorageService, private eventBusService: EventBusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
];

 

