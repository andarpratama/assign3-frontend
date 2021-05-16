import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourses } from 'src/interface/ICourses';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private userId: string

  constructor(private http: HttpClient, private authService: AuthService) {
    this.userId = this.authService.getUserId()
  }

  getUserId() {
    return this.userId
  }

  getToken() {
    return this.authService.getToken()
  }

  addCart() {
    return this.http.get<ICourses[]>(`${apiURL}user/noauth/info/${this.userId}`);
  }


  getInfo(): any {
    return this.http.get<ICourses[]>(`${apiURL}user/info/${this.userId}`)
  }

  getCart():any {
    this.http.get(`${apiURL}user/info/${this.userId}`)
  }

}
