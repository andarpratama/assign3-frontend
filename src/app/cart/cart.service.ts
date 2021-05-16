import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourses } from 'src/interface/ICourses';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private userId: string

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    this.userId = this.authService.getUserId()
  }

  getUserId() {
    return this.userId
  }

  getToken() {
    return this.authService.getToken()
  }

  addCart(id:string, userId: string) {
    return this.http.post<ICourses[]>(`${apiURL}cart/add/noauth/${id}`, {userId}).subscribe((response:any) => {
      if (response.msg === "Pull new cart is success..") {
        Swal.fire('Success', 'Added this course to Cart..', 'success')
      }
      setTimeout(()=> window.location.reload(), 1000)
    }, error => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something worng..!'
        })
      }
    })
  }

  deleteCart(id:string, userId: string) {
    return this.http.post<ICourses[]>(`${apiURL}cart/delete/noauth/${id}`, {userId}).subscribe((response:any) => {
      console.log('deleting cart...')
      console.log(response)
      if (response.msg === "Pull new cart is success..") {
        Swal.fire('Success', 'Delete this course from Cart..', 'success')
      }
      setTimeout(()=> window.location.reload(), 1000)

      // this.router.navigate(['/cart']);
    }, error => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something worng..!'
        })
      }
    })
  }


  getInfo(): any {
    return this.http.get<ICourses[]>(`${apiURL}user/noauth/info/${this.userId}`)
  }

  getCart():any {
    this.http.get(`${apiURL}user/info/${this.userId}`)
  }

}
