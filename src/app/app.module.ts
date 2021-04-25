import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { BreadcrumbdsComponent } from './detailpage/breadcrumbds/breadcrumbds.component';
import { CardComponent } from './home/card/card.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ContainerCardComponent } from './home/container-card/container-card.component';
import { BannerComponent } from './shared/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailpageComponent,
    BreadcrumbdsComponent,
    CardComponent,
    PageNotfoundComponent,
    ContainerCardComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
