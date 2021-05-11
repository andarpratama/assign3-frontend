import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerCoursesComponent } from './container-courses/container-courses.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { FilterCourseComponent } from './filter-course/filter-course.component';


@NgModule({
  declarations: [
    ContainerCoursesComponent,
    CardCourseComponent,
    FilterCourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
