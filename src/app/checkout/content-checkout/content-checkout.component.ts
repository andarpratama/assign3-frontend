import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { CourseService } from 'src/app/services/course.service';
import { RupiahFormatService } from 'src/app/services/rupiah-format.service';

@Component({
  selector: 'app-content-checkout',
  templateUrl: './content-checkout.component.html',
  styleUrls: ['./content-checkout.component.css']
})
export class ContentCheckoutComponent implements OnInit {
  cartCount:any
  carts: any
  courseCart: any
  totalPrice: number = 0
  constructor(private cartService: CartService, private courseService: CourseService, private genRupiah: RupiahFormatService) { }

  ngOnInit(): void {
    this.cartService.getInfo().subscribe((result: any) => {
      this.cartCount = result.data.cartId.length
      this.carts = result.data.cartId
      this.getAllCart(this.carts)
      console.log(this.carts)
    })
  }

  generateRp(price:number) {
    return this.genRupiah.generateRupiahFormat(price)
  }

  getAllCart(cartsId:[]) {
    cartsId.forEach(id => {
      this.courseCart = []
      this.courseService.getOneCourse(id)
      .subscribe((result: any) => {
        this.courseCart.push(result.data)
        this.totalPrice += result.data.price
        console.log(this.courseCart)
      })
    })
  }

}
