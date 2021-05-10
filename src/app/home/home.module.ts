import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './card/card.component';
import { ContainerCardComponent } from './container-card/container-card.component';


@NgModule({
  declarations: [
    CardComponent,
    ContainerCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
