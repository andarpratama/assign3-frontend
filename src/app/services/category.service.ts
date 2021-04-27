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
        url: '#'
      },
      {
        id: 2,
        name: 'UI / UX Designer',
        url: '#'
      },
      {
        id: 3,
        name: 'Frontend',
        url: '#'
      },
      {
        id: 4,
        name: 'Backend',
        url: '#'
      },
      {
        id: 5,
        name: 'Data Science',
        url: '#'
      },
      {
        id: 6,
        name: 'Machine Learning',
        url: '#'
      },
      {
        id: 7,
        name: 'Web Programming',
        url: '#'
      },
      {
        id: 8,
        name: 'Desktop Programming',
        url: '#'
      },
      {
        id: 9,
        name: 'Mobile Programming',
        url: '#'
      },
    ]
  }
}
