import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const authToken = localStorage.getItem('token') || 'aaa.bbb.ccc'
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    return next.handle(authRequest);
  }

}

