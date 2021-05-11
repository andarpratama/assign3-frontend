import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCoursesComponent } from './container-courses/container-courses.component';

const routes: Routes = [
  {path: '', component: ContainerCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
