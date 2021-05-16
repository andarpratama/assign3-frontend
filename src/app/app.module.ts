import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainCheckoutComponent } from './checkout/main-checkout/main-checkout.component';
import { AuthModule } from './auth/auth.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomepageModule } from './homepage/homepage.module';
import { ProfileModule } from './profile/profile.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LearnModule } from './learn/learn.module';
import { CartModule } from './cart/cart.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    MainCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HomepageModule,
    DetailRoutingModule,
    ProfileModule,
    LearnModule,
    CartModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
