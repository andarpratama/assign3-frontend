import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContainerCartComponent } from './cart/container-cart/container-cart.component';
import { MainCheckoutComponent } from './checkout/main-checkout/main-checkout.component';
import { AuthModule } from './auth/auth.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomepageModule } from './homepage/homepage.module';
import { ProfileModule } from './profile/profile.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LearnModule } from './learn/learn.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    ContainerCartComponent,
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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
