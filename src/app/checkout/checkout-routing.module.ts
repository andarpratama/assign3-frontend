import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCheckoutComponent } from './container-checkout/container-checkout.component';
import { SuccessCheckoutComponent } from './success-checkout/success-checkout.component';

const routes: Routes = [
  {path: '', component: ContainerCheckoutComponent},
  {path: 'success', component: SuccessCheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
