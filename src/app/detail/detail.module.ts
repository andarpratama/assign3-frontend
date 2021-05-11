import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerDetailComponent } from './container-detail/container-detail.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PreviewDetailComponent } from './preview-detail/preview-detail.component';


@NgModule({
  declarations: [
    ContainerDetailComponent,
    ContentDetailComponent,
    PreviewDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DetailRoutingModule
  ],
  exports: [
    ContainerDetailComponent
  ]
})
export class DetailModule { }
