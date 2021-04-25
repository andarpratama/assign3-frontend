import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

   constructor() { }
   
   getCourseFrontend() {
      return [
         {
            id: 1,
            title: 'Build Responsive Real World Websites with HTML5 and CSS3',
            image: 'https://img-a.udemycdn.com/course/480x270/2153774_bef0_4.jpg?',
            author: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 10,
            date: '19 April 2021',
            price: 1900000
         },
         {
            id: 2,
            title: 'CSS - The Complete Guided 2021',
            image: 'https://img-b.udemycdn.com/course/480x270/1561458_7f3b_2.jpg?',
            author: 'Aji Wahyugi',
            level: 'All Level',
            hours: 18,
            students: 18,
            date: '20 April 2021',
            price: 1450000
         },
         {
            id: 3,
            title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
            image: 'https://img-a.udemycdn.com/course/480x270/246154_d8b0_3.jpg?',
            author: 'Doni Firmansyah',
            level: 'All Level',
            hours: 18,
            students: 27,
            date: '21 April 2021',
            price: 1500000
         },
         {
            id: 4,
            title: 'Build Responsive Website Using HTML5, CSS3, JS And Bootstrap',
            image: 'https://img-b.udemycdn.com/course/480x270/787236_67ff_3.jpg?',
            author: 'Shandika Galih',
            level: 'All Level',
            hours: 18,
            students: 31,
            date: '22 April 2021',
            price: 1250000
         },
         {
            id: 5,
            title: 'The Bootstrap 4 Bootcamp 2021',
            image: 'https://img-a.udemycdn.com/course/480x270/1968412_f5f5_5.jpg?',
            author: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 16,
            date: '23 April 2021',
            price: 180000
         },
         {
            id: 6,
            title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
            image: 'https://img-a.udemycdn.com/course/480x270/995016_ebf4_3.jpg',
            author: 'Shandika Galih',
            level: 'Middle',
            hours: 18,
            students: 26,
            date: '25 April 2021',
            price: 2500000
         },
         {
            id: 7,
            title: 'The Complete React Developer Course (w/ Hooks and Redux)',
            image: 'https://img-a.udemycdn.com/course/480x270/1286908_1773_6.jpg',
            author: 'Andar Pratama',
            level: 'Middle',
            hours: 18,
            students: 22,
            date: '26 April 2021',
            price: 1750000
         },
         {
            id: 8,
            title: 'Angular - The Complete Guide (2021 Edition)',
            image: 'https://img-a.udemycdn.com/course/480x270/756150_c033_2.jpg',
            author: 'Aji Wahyugi',
            level: 'Middle',
            hours: 18,
            students: 36,
            date: '27 April 2021',
            price: 1250000
         },
      ]
   }

   getCourseBackend() {
      return [
         {
            id: 1,
            title: 'PHP Course for Beginners 2021',
            image: 'https://img-b.udemycdn.com/course/480x270/1576856_1e49.jpg',
            author: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 10,
            date: '19 April 2021',
            price: 1900000
         },
         {
            id: 2,
            title: 'PHP with PDO: Build a Basic Task List with PHP, PDO & MySQL',
            image: 'https://img-a.udemycdn.com/course/480x270/787164_60d0_3.jpg',
            author: 'Aji Wahyugi',
            level: 'All Level',
            hours: 18,
            students: 18,
            date: '20 April 2021',
            price: 1450000
         },
         {
            id: 3,
            title: 'E-Commerce Website in PHP & MySQL From Scratch!',
            image: 'https://img-a.udemycdn.com/course/480x270/267560_d924_12.jpg',
            author: 'Doni Firmansyah',
            level: 'All Level',
            hours: 18,
            students: 27,
            date: '21 April 2021',
            price: 1500000
         },
         {
            id: 4,
            title: 'Learn Python Programming Masterclass 2021',
            image: 'https://img-a.udemycdn.com/course/480x270/629302_8a2d_2.jpg',
            author: 'Shandika Galih',
            level: 'All Level',
            hours: 18,
            students: 31,
            date: '22 April 2021',
            price: 1250000
         },
         {
            id: 5,
            title: 'Node.js: The Complete Guide to Build RESTful APIs (2018)',
            image: 'https://img-a.udemycdn.com/course/480x270/1638522_fbdf.jpg',
            author: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 16,
            date: '23 April 2021',
            price: 180000
         },
         {
            id: 6,
            title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
            image: 'https://img-a.udemycdn.com/course/480x270/995016_ebf4_3.jpg',
            author: 'Shandika Galih',
            level: 'Middle',
            hours: 18,
            students: 26,
            date: '25 April 2021',
            price: 2500000
         },
         {
            id: 7,
            title: 'The Complete React Developer Course (w/ Hooks and Redux)',
            image: 'https://img-a.udemycdn.com/course/480x270/1286908_1773_6.jpg',
            author: 'Andar Pratama',
            level: 'Middle',
            hours: 18,
            students: 22,
            date: '26 April 2021',
            price: 1750000
         },
         {
            id: 8,
            title: 'Angular - The Complete Guide (2021 Edition)',
            image: 'https://img-a.udemycdn.com/course/480x270/756150_c033_2.jpg',
            author: 'Aji Wahyugi',
            level: 'Middle',
            hours: 18,
            students: 36,
            date: '27 April 2021',
            price: 1250000
         },
      ]
   }
}
