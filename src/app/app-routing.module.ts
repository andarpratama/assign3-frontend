import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { ProfilComponent } from './profil/profil.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'detail', component: DetailpageComponent},
  { path: 'profile', component: ProfilComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'courses', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
