import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

const apiURL:string = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string = 'token';
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(data): any{
    console.log('run login..')
    this.http.post(`${apiURL}auth/login`, data).subscribe((response:any) => {
      console.log(response)
      // const token = response.data.token;
      this.token = response.data.bearerToken
      localStorage.setItem('token', response.data.bearerToken);
      // console.log(this.token)
      if (response.success) {
        const expiresInDuration = response.data.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.userId = response.data.userID;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date( now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(this.token, expirationDate, this.userId);
        this.router.navigate(['/']);
      }

      Swal.fire('Success', 'Login success..', 'success')
    }, error => {
      console.log(error)
      console.log(error.error.message)
      if (error.error.message === "Invalid Email: Please input valid Email") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your email is invalid!'
        })
      } else if (error.error.message === "Invalid Email: Your email is wrong or not registerd") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your email is wrong or not registerd!'
        })
      } else if (error.error.message === "Invalid Password: Your password is wrong") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your password is wrong!'
        })
      }
      this.authStatusListener.next(false);
    })
  }

  createUser(data): any {
    console.log('run register..')
    this.http.post(`${apiURL}auth/register`, data).subscribe((response:any) => {
      if (response.success) {
        console.log('run response..')
        console.log(response)
        this.router.navigate(['/auth/login']);
        Swal.fire('Success', 'Register success..', 'success')
      }
    }, error => {
      this.authStatusListener.next(false);
    })
  }

  getToken(): any {
    return this.token;
  }

  getIsAuth(): any {
    return this.isAuthenticated;
  }

  getUserId(): any {
    return this.userId;
  }

  getAuthStatusListener(): any {
    return this.authStatusListener.asObservable();
  }

  autoAuthUser(): any {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
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

  private setAuthTimer(duration: number): any {
    console.log('setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string): any {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private getAuthData(): any {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId
    };
  }

}
