import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { apiURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string
  private authStatusListener = new Subject<boolean>();
  private userId: string;

  constructor(private http: HttpClient, private router: Router) { }

  login(data): any{
    console.log('run login..')
    this.http.post(`${apiURL}auth/login`, data).subscribe((response:any) => {
      this.token = response.data.bearerToken
      if (response.success) {
        console.log('run response..')
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.saveAuthData(this.token, this.userId);
        this.router.navigate(['/']);
      }
    }, error => {
      this.authStatusListener.next(false);
    })
  }

  createUser(data): any {
    // const authData: AuthData = { email, password };
    console.log('run register..')
    this.http.post(`${apiURL}auth/register`, data).subscribe((response:any) => {
      if (response.success) {
        console.log('run response..')
        console.log(response)
        this.router.navigate(['/auth/login']);
      }
    }, error => {
      this.authStatusListener.next(false);
    })
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  getToken(): string {
    return this.token
  }

  getAuthStatusListener(): any {
    return this.authStatusListener.asObservable();
  }

  logout(): any {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private clearAuthData(): any {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  private saveAuthData(token: string, userId: string): any {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  private getAuthData(): any {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) {
      return;
    }
    return {
      token,
      userId
    };
  }

}
