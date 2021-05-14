import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-container-cart',
  templateUrl: './container-cart.component.html',
  styleUrls: ['./container-cart.component.css']
})
export class ContainerCartComponent implements OnInit {
  user: any
  userInfo: any
  token: any
  constructor(private cartService: CartService, private authService: AuthService) {
  }


  ngOnInit(): void {
    // this.user = this.cartService.getUserId()
    this.cartService.getInfo().subscribe((result:any) => this.userInfo = result.data )
  }

}
