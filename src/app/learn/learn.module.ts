import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerLearnComponent } from './container-learn/container-learn.component';
import { ContentLearnComponent } from './content-learn/content-learn.component';
import { CardLearnComponent } from './card-learn/card-learn.component';


@NgModule({
  declarations: [
    ContainerLearnComponent,
    ContentLearnComponent,
    CardLearnComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LearnRoutingModule
  ]
})
export class LearnModule { }
