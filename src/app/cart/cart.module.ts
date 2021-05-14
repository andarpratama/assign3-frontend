import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerCartComponent } from './container-cart/container-cart.component';
import { ContentCartComponent } from './content-cart/content-cart.component';
import { ItemCartComponent } from './item-cart/item-cart.component';


@NgModule({
  declarations: [
    ContainerCartComponent,
    ContentCartComponent,
    ItemCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule {  }
