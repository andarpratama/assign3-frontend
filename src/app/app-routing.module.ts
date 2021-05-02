import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfilComponent } from './profil/profil.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail', component: DetailpageComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'courses', component: ProductComponent },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
