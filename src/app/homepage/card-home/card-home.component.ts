import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { CoursesModule } from 'src/app/modules/course/course.module';
import { ICourses } from 'src/interface/ICourses';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {
  @Input() item: ICourses
  userId: string
  constructor(private cartService: CartService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  addCart(id: string) {
    console.log('run add cart...')
    this.userId = this.authService.getUserId()
    console.log(this.userId)
    this.cartService.addCart(id, this.userId)
  }

  generateRupiahFormat(bilangan:number) {
      let reverse:string = bilangan.toString().split('').reverse().join('')
      let ribuan:any = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ribuan
   }

}
