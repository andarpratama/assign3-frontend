import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { BreadcrumbdsComponent } from './detailpage/breadcrumbds/breadcrumbds.component';
import { CardComponent } from './home/card/card.component';
import { ContainerCardComponent } from './home/container-card/container-card.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PopularCourseComponent } from './product/popular-course/popular-course.component';
import { ContainerProductComponent } from './product/container-product/container-product.component';
import { FilterComponent } from './product/filter/filter.component';
import { CardProductComponent } from './product/card-product/card-product.component';
import { HeaderDetailpageComponent } from './detailpage/header-detailpage/header-detailpage.component';
import { MainDetailpageComponent } from './detailpage/main-detailpage/main-detailpage.component';
import { PreviewDetailpageComponent } from './detailpage/preview-detailpage/preview-detailpage.component';
import { ContentDetailpageComponent } from './detailpage/content-detailpage/content-detailpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailpageComponent,
    BreadcrumbdsComponent,
    CardComponent,
    ContainerCardComponent,
    BannerComponent,
    FooterComponent,
    NavigationComponent,
    PageNotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    PopularCourseComponent,
    ContainerProductComponent,
    FilterComponent,
    CardProductComponent,
    HeaderDetailpageComponent,
    MainDetailpageComponent,
    PreviewDetailpageComponent,
    ContentDetailpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
