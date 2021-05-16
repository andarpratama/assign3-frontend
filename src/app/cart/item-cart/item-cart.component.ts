import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
  @Input() item: any
  userId:string
  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  deleteCart(id: string) {
    console.log('run delete cart...')
    this.userId = this.authService.getUserId()
    console.log(this.userId)
    this.cartService.deleteCart(id, this.userId)
  }

  generateRupiahFormat(bilangan:number) {
    let reverse:string = bilangan.toString().split('').reverse().join('')
    let ribuan:any = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan
   }

}
