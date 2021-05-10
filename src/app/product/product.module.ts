import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CardProductComponent } from './card-product/card-product.component';
import { ContainerProductComponent } from './container-product/container-product.component';
import { FilterComponent } from './filter/filter.component';
import { PopularCourseComponent } from './popular-course/popular-course.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [
    ProductComponent,
    CardProductComponent,
    ContainerProductComponent,
    FilterComponent,
    PopularCourseComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],

})
export class ProductModule { }
