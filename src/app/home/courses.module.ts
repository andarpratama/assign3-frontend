import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoursesModule {
   id: number;
   title: string;
   image: string;
   author: string;
   level: string;
   hours: number;
   students: number;
   date: string;
   price: number;
 }