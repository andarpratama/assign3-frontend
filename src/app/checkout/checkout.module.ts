import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { ContainerCheckoutComponent } from './container-checkout/container-checkout.component';
import { SharedModule } from '../shared/shared.module';
import { ContentCheckoutComponent } from './content-checkout/content-checkout.component';
import { ItemCheckoutComponent } from './item-checkout/item-checkout.component';
import { SuccessCheckoutComponent } from './success-checkout/success-checkout.component';


@NgModule({
  declarations: [
    ContainerCheckoutComponent,
    ContentCheckoutComponent,
    ItemCheckoutComponent,
    SuccessCheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
