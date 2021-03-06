import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { RupiahFormatService } from 'src/app/services/rupiah-format.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-content-cart',
  templateUrl: './content-cart.component.html',
  styleUrls: ['./content-cart.component.css']
})
export class ContentCartComponent implements OnInit {
  carts: any
  cartCount: any
  courseCart: any
  totalPrice: number = 0
  constructor(private cartService: CartService, private courseService: CourseService, private genRupiah: RupiahFormatService) { }

  ngOnInit(): void {
    this.cartService.getInfo().subscribe((result: any) => {
      this.cartCount = result.data.cartId.length
      this.carts = result.data.cartId
      this.getAllCart(this.carts)
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
        console.log(result.data.price)
        this.totalPrice += result.data.price
        console.log(this.courseCart)
      })
    })
  }

}
