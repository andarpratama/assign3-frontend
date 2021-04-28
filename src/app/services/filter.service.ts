import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

   constructor() { }
   
   getFilterHours() {
      return {
         title: 'Hours',
         items: [
            {
               option: '1 - 3',
               total: '330 Hours'
            },
            {
               option: '6 - 9',
               total: '130 Hours'
            },
            {
               option: '9 - 16',
               total: '120 Hours'
            },
            {
               option: '16+',
               total: '97 Hours'
            },
         ]
      }
   }

   getFilterTopic() {
      return {
         title: 'Topic',
         items: [
            {
               option: 'HTML',
               total: 330
            },
            {
               option: 'CSS',
               total: 130
            },
            {
               option: 'Javascript',
               total: 120
            },
            {
               option: 'PHP',
               total: 97
            },
            {
               option: 'NodeJS',
               total: 97
            },
            {
               option: 'React',
               total: 97
            },
         ]
      }
   }

   getFilterCategory() {
      return {
         title: 'Category',
         items: [
            {
               option: 'Web Development',
               total: 330
            },
            {
               option: 'Desktop Development',
               total: 130
            },
            {
               option: 'Mobile Development',
               total: 120
            },
            {
               option: 'Database Design',
               total: 97
            },
         ]
      }
   }

   getFilterLevel() {
      return {
         title: 'Level',
         items: [
            {
               option: 'All',
               total: 330
            },
            {
               option: 'Beginner',
               total: 130
            },
            {
               option: 'Intermediate',
               total: 120
            },
            {
               option: 'Expert',
               total: 97
            },
         ]
      }
   }
}
