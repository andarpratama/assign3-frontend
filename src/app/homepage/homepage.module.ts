import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { CardHomeComponent } from './card-home/card-home.component';


@NgModule({
  declarations: [
    ContainerHomeComponent,
    ContentHomeComponent,
    CardHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
