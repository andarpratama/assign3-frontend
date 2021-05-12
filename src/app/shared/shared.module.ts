import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BreadcrumbdComponent } from './breadcrumbd/breadcrumbd.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HeaderDetailComponent } from './header-detail/header-detail.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BannerComponent,
    BreadcrumbdComponent,
    FooterComponent,
    HeaderPageComponent,
    NavigationComponent,
    PageNotfoundComponent,
    HeaderDetailComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BannerComponent,
    BreadcrumbdComponent,
    FooterComponent,
    HeaderPageComponent,
    NavigationComponent,
    PageNotfoundComponent,
    HeaderDetailComponent,
    CardComponent,
  ]
})
export class SharedModule { }
