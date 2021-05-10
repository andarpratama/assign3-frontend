import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { ContainerCardComponent } from './home/container-card/container-card.component';
import { BannerComponent } from './shared/banner/banner.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { ProfilComponent } from './profil/profil.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContainerCartComponent } from './cart/container-cart/container-cart.component';
import { HeaderPageComponent } from './shared/header-page/header-page.component';
import { BreadcrumbdComponent } from './shared/breadcrumbd/breadcrumbd.component';
import { MainProfileComponent } from './profil/main-profile/main-profile.component';
import { MainCheckoutComponent } from './checkout/main-checkout/main-checkout.component';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { PopularCoursesComponent } from './shared/popular-courses/popular-courses.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ContainerCardComponent,
    BannerComponent,
    PageNotfoundComponent,
    ProfilComponent,
    CartComponent,
    CheckoutComponent,
    ContainerCartComponent,
    HeaderPageComponent,
    BreadcrumbdComponent,
    MainProfileComponent,
    MainCheckoutComponent,
    PopularCoursesComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
