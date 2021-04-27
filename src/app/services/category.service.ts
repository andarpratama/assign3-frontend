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
        name: 'Basic Programming'
      },
      {
        id: 2,
        name: 'UI / UX Designer'
      },
      {
        id: 3,
        name: 'Frontend'
      },
      {
        id: 4,
        name: 'Backend'
      },
      {
        id: 5,
        name: 'Data Science'
      },
      {
        id: 6,
        name: 'Machine Learning'
      },
      {
        id: 7,
        name: 'Web Programming'
      },
      {
        id: 8,
        name: 'Desktop Programming'
      },
      {
        id: 9,
        name: 'Mobile Programming'
      },
    ]
  }
}
