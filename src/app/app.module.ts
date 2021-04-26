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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
