import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {
  @Input() item: any
  userId: string;
  constructor(private authService: AuthService, private cartService: CartService) { }

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
