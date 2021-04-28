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
        url: '/courses'
      },
      {
        id: 2,
        name: 'UI / UX Designer',
        url: '/courses'
      },
      {
        id: 3,
        name: 'Frontend Development',
        url: '/courses'
      },
      {
        id: 4,
        name: 'Backend Development',
        url: '/courses'
      },
      {
        id: 5,
        name: 'Data Science',
        url: '/courses'
      },
      {
        id: 6,
        name: 'Machine Learning',
        url: '/courses'
      },
      {
        id: 7,
        name: 'Web Programming',
        url: '/courses'
      },
      {
        id: 8,
        name: 'Desktop Programming',
        url: '/courses'
      },
      {
        id: 9,
        name: 'Mobile Programming',
        url: '/courses'
      },
    ]
  }
}
