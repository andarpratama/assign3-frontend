import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const apiURL: string = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class CartService {

   constructor(private http: HttpClient, private router: Router) { }

   getInfo(user): any {
      return this.http.get(`${apiURL}user/info/${user}`)
   }

}
