import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategory() {
    return [
      {
        id: 1,
        name: 'Basic Programming',
        value: 'basicprogramming',
        url: '/courses'
      },
      {
        id: 2,
        name: 'UI / UX Designer',
        value: 'uiuxdesign',
        url: '/courses'
      },
      {
        id: 3,
        name: 'Frontend Development',
        value: 'frontend',
        url: '/courses'
      },
      {
        id: 4,
        name: 'Backend Development',
        value: 'backend',
        url: '/courses'
      },
      {
        id: 5,
        name: 'Data Science',
        value: 'datascience',
        url: '/courses'
      },
      {
        id: 6,
        name: 'Machine Learning',
        value: 'machinelearning',
        url: '/courses'
      },
      {
        id: 7,
        name: 'Web Programming',
        value: 'webprogramming',
        url: '/courses'
      },
      {
        id: 8,
        name: 'Desktop Programming',
        value: 'desktopprogramming',
        url: '/courses'
      },
      {
        id: 9,
        name: 'Mobile Programming',
        value: 'mobileprogramming',
        url: '/courses'
      },
    ]
  }
}
