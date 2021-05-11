import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)},
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)},
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
