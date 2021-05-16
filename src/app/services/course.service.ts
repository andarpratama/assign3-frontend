import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICourses } from '../../interface/ICourses';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ICourse } from 'src/interface/ICourse';
import Swal from 'sweetalert2';

const apiURL = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: ICourses[] = [];
  private postsUpdated = new Subject<{ posts: ICourses[]}>();

  constructor(private http: HttpClient, private router: Router) { }

  addCourse(id:string, idUser: string) {
    return this.http.post<ICourses[]>(`${apiURL}checkout/add/${id}`, {idUser}).subscribe((response:any) => {
      console.log(response)
      if (response.msg === "Add new course is success..") {
        Swal.fire('Success', 'Added this course to My Learn..', 'success')
      }
      setTimeout(()=> this.router.navigate(['/checkout/success']), 1000)
    }, error => {
      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something worng..!'
        })
      }
    })
  }

  getOneCourse(keyword:string):any {
    return this.http.get<ICourses[]>(`${apiURL}course/getone/${keyword}`)
  }

  getDetail(keyword: string) {
    return this.http.get<ICourses[]>(`${apiURL}course/getone/${keyword}`)
  }

  getPosts(keyword):any {
    return this.http.get<ICourses[]>(`${apiURL}course/getall`).pipe(
      map((courses: any) => {
          let result =  courses.data
          return result.filter((course) => course.devCategory === keyword)
      })
    )
  }

  filterCourse(data: []) {
    data.filter((result:any) => {
      result.devCategory === "frontend"
    })
  }

   getAll(): Observable<ICourses[]> {
      return this.http.get<ICourses[]>(`${apiURL}course/getall`)
   }

  getFrontendCourse(): Observable<ICourses[]> {
      return this.http.get<ICourses[]>(`${apiURL}course/filter/devcategory/frontend`)
   }



   getAllCourse() {
      return [
         {
            "_id": "608fbadb439d3996ec43642d",
            "title": "Build Responsive Real World Websites with HTML5 and CSS3",
            "image": "https://img-a.udemycdn.com/course/480x270/2153774_bef0_4.jpg?",
            "instructor": "Andar Pratama",
            "topic": "Web Development",
            "level": "All Level",
            "category": "CSS",
            "price": 1900000,
            "hours": 18,
            "students": 10,
            "devCategory": "frontend",
            "created_at": "2021-05-03T08:56:59.113Z",
            "updated_at": "2021-05-03T08:56:59.113Z",
            "__v": 0
          },
          {
            "_id": "608fbb1e439d3996ec43642e",
            "title": "CSS - The Complete Guided 2021",
            "image": "https://img-b.udemycdn.com/course/480x270/1561458_7f3b_2.jpg",
            "instructor": "Aji Wahyugi",
            "topic": "Web Development",
            "level": "Middle",
            "category": "CSS",
            "price": 1450000,
            "hours": 20,
            "students": 32,
            "devCategory": "frontend",
            "created_at": "2021-05-03T08:58:06.844Z",
            "updated_at": "2021-05-03T08:58:06.844Z",
            "__v": 0
          },
          {
            "_id": "608fbb47439d3996ec43642f",
            "title": "Web Design for Beginners: Real World Coding in HTML & CSS",
            "image": "https://img-a.udemycdn.com/course/480x270/246154_d8b0_3.jpg",
            "instructor": "Doni Firmansyah",
            "topic": "Web Development",
            "level": "Middle",
            "category": "CSS",
            "price": 1500000,
            "hours": 13,
            "students": 22,
            "devCategory": "frontend",
            "created_at": "2021-05-03T08:58:47.360Z",
            "updated_at": "2021-05-03T08:58:47.360Z",
            "__v": 0
          },
          {
            "_id": "608fbb76439d3996ec436430",
            "title": "Build Responsive Website Using HTML5, CSS3, JS And Bootstrap",
            "image": "https://img-b.udemycdn.com/course/480x270/787236_67ff_3.jpg",
            "instructor": "Shandika Galih",
            "topic": "Web Development",
            "level": "Middle",
            "category": "CSS",
            "price": 1250000,
            "hours": 24,
            "students": 34,
            "devCategory": "frontend",
            "created_at": "2021-05-03T08:59:34.701Z",
            "updated_at": "2021-05-03T08:59:34.701Z",
            "__v": 0
          },
          {
            "_id": "608fbba4439d3996ec436431",
            "title": "The Bootstrap 4 Bootcamp 2021",
            "image": "https://img-a.udemycdn.com/course/480x270/1968412_f5f5_5.jpg",
            "instructor": "Andar Pratama",
            "topic": "Web Development",
            "level": "Middle",
            "category": "CSS",
            "price": 180000,
            "hours": 13,
            "students": 21,
            "devCategory": "frontend",
            "created_at": "2021-05-03T09:00:20.431Z",
            "updated_at": "2021-05-03T09:00:20.431Z",
            "__v": 0
          },
          {
            "_id": "608fbbe0439d3996ec436432",
            "title": "Vue - The Complete Guide (w/ Router, Vuex, Composition API)",
            "image": "https://img-a.udemycdn.com/course/480x270/995016_ebf4_3.jpg",
            "instructor": "Andar Pratama",
            "topic": "Web Development",
            "level": "Middle",
            "category": "Vue",
            "price": 2500000,
            "hours": 19,
            "students": 28,
            "devCategory": "frontend",
            "created_at": "2021-05-03T09:01:20.148Z",
            "updated_at": "2021-05-03T09:01:20.148Z",
            "__v": 0
          },
          {
            "_id": "608fbc3d439d3996ec436433",
            "title": "The Complete React Developer Course (w/ Hooks and Redux)",
            "image": "https://img-a.udemycdn.com/course/480x270/1286908_1773_6.jpg",
            "instructor": "Andar Pratama",
            "topic": "Web Development",
            "level": "Middle",
            "category": "React",
            "price": 1750000,
            "hours": 16,
            "students": 25,
            "devCategory": "frontend",
            "created_at": "2021-05-03T09:02:53.141Z",
            "updated_at": "2021-05-03T09:02:53.141Z",
            "__v": 0
          },
          {
            "_id": "608fbc62439d3996ec436434",
            "title": "Angular - The Complete Guide (2021 Edition)",
            "image": "https://img-a.udemycdn.com/course/480x270/756150_c033_2.jpg",
            "instructor": "Aji Wahyugi",
            "topic": "Web Development",
            "level": "Middle",
            "category": "Angular",
            "price": 1950000,
            "hours": 14,
            "students": 23,
            "devCategory": "frontend",
            "created_at": "2021-05-03T09:03:30.188Z",
            "updated_at": "2021-05-03T09:03:30.188Z",
            "__v": 0
          },
          {
            "_id": "608fbcd2439d3996ec436435",
            "title": "PHP Course for Beginners 2021",
            "image": "https://img-b.udemycdn.com/course/480x270/1576856_1e49.jpg",
            "instructor": "Aji Wahyugi",
            "topic": "Web Development",
            "level": "Beginner",
            "category": "PHP",
            "price": 1900000,
            "hours": 14,
            "students": 23,
            "devCategory": "backend",
            "created_at": "2021-05-03T09:05:22.344Z",
            "updated_at": "2021-05-03T09:05:22.344Z",
            "__v": 0
          },
          {
            "_id": "608fbd43439d3996ec436436",
            "title": "PHP with PDO: Build a Basic Task List with PHP, PDO & MySQL",
            "image": "https://img-a.udemycdn.com/course/480x270/787164_60d0_3.jpg",
            "instructor": "Andar Pratama",
            "topic": "Web Development",
            "level": "Middle",
            "category": "PHP",
            "price": 1450000,
            "hours": 14,
            "students": 28,
            "devCategory": "backend",
            "created_at": "2021-05-03T09:07:15.678Z",
            "updated_at": "2021-05-03T09:07:15.678Z",
            "__v": 0
          },
          {
            "_id": "608fbd64439d3996ec436437",
            "title": "E-Commerce Website in PHP & MySQL From Scratch!",
            "image": "https://img-a.udemycdn.com/course/480x270/267560_d924_12.jpg",
            "instructor": "Doni Firmansyah",
            "topic": "Web Development",
            "level": "Middle",
            "category": "PHP",
            "price": 1500000,
            "hours": 12,
            "students": 24,
            "devCategory": "backend",
            "created_at": "2021-05-03T09:07:48.164Z",
            "updated_at": "2021-05-03T09:07:48.164Z",
            "__v": 0
          },
          {
            "_id": "608fbd8e439d3996ec436438",
            "title": "Learn Python Programming Masterclass 2021",
            "image": "https://img-a.udemycdn.com/course/480x270/629302_8a2d_2.jpg",
            "instructor": "Shandika Galih",
            "topic": "Web Development",
            "level": "Middle",
            "category": "Phyton",
            "price": 1250000,
            "hours": 15,
            "students": 22,
            "devCategory": "backend",
            "created_at": "2021-05-03T09:08:30.643Z",
            "updated_at": "2021-05-03T09:08:30.643Z",
            "__v": 0
          },
          {
            "_id": "608fbdbc439d3996ec436439",
            "title": "Node.js: The Complete Guide to Build RESTful APIs (2018)",
            "image": "https://img-a.udemycdn.com/course/480x270/1638522_fbdf.jpg",
            "instructor": "Shandika Galih",
            "topic": "Web Development",
            "level": "Middle",
            "category": "Node",
            "price": 1800000,
            "hours": 12,
            "students": 20,
            "devCategory": "backend",
            "created_at": "2021-05-03T09:09:16.589Z",
            "updated_at": "2021-05-03T09:09:16.589Z",
            "__v": 0
          },
          {
            "_id": "609002f5afe07f1694ea9d6e",
            "title": "Master Electron: Desktop Apps with HTML, JavaScript & CSS",
            "image": "https://img-a.udemycdn.com/course/480x270/941998_7ec6_6.jpg",
            "instructor": "Galih Vanbudi",
            "topic": "Desktop Development",
            "level": "Middle",
            "category": "Electron",
            "price": 1600000,
            "hours": 12,
            "students": 20,
            "devCategory": "desktop",
            "created_at": "2021-05-03T14:04:37.817Z",
            "updated_at": "2021-05-03T14:04:37.817Z",
            "__v": 0
          },
          {
            "_id": "60900368afe07f1694ea9d6f",
            "title": "Java Programming Masterclass for Software Developers",
            "image": "https://img-b.udemycdn.com/course/480x270/533682_c10c_4.jpg",
            "instructor": "Galih Vanbudi",
            "topic": "Desktop Development",
            "level": "Middle",
            "category": "Java",
            "price": 1600000,
            "hours": 12,
            "students": 20,
            "devCategory": "desktop",
            "created_at": "2021-05-03T14:06:32.935Z",
            "updated_at": "2021-05-03T14:06:32.935Z",
            "__v": 0
          }
      ]
   }

   getPopularCourse(){
     return [
         {
            id: '03033993',
            title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
            image: 'https://img-a.udemycdn.com/course/480x270/995016_ebf4_3.jpg',
            instructor: 'Shandika Galih',
            level: 'Middle',
            hours: 18,
            students: 26,
            date: '25 April 2021',
            price: 2500000
         },
         {
            id: '03033993',
            title: 'Learn Python Programming Masterclass 2021',
            image: 'https://img-a.udemycdn.com/course/480x270/629302_8a2d_2.jpg',
            instructor: 'Shandika Galih',
            level: 'All Level',
            hours: 18,
            students: 31,
            date: '22 April 2021',
            price: 1250000
         },
         {
            id: '03033993',
            title: 'PHP with PDO: Build a Basic Task List with PHP, PDO & MySQL',
            image: 'https://img-a.udemycdn.com/course/480x270/787164_60d0_3.jpg',
            instructor: 'Aji Wahyugi',
            level: 'All Level',
            hours: 18,
            students: 18,
            date: '20 April 2021',
            price: 1450000
         },
         {
            id: '03033993',
            title: 'Node.js: The Complete Guide to Build RESTful APIs (2018)',
            image: 'https://img-a.udemycdn.com/course/480x270/1638522_fbdf.jpg',
            instructor: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 16,
            date: '23 April 2021',
            price: 180000
         },
      ]
   }

   getCourseFrontend() {
      return [
         {
            id: '03033993',
            title: 'Build Responsive Real World Websites with HTML5 and CSS3',
            image: 'https://img-a.udemycdn.com/course/480x270/2153774_bef0_4.jpg?',
            instructor: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 10,
            date: '19 April 2021',
            price: 1900000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'CSS - The Complete Guided 2021',
            image: 'https://img-b.udemycdn.com/course/480x270/1561458_7f3b_2.jpg?',
            instructor: 'Aji Wahyugi',
            level: 'All Level',
            hours: 18,
            students: 18,
            date: '20 April 2021',
            price: 1450000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
            image: 'https://img-a.udemycdn.com/course/480x270/246154_d8b0_3.jpg?',
            instructor: 'Doni Firmansyah',
            level: 'All Level',
            hours: 18,
            students: 27,
            date: '21 April 2021',
            price: 1500000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'Build Responsive Website Using HTML5, CSS3, JS And Bootstrap',
            image: 'https://img-b.udemycdn.com/course/480x270/787236_67ff_3.jpg?',
            instructor: 'Shandika Galih',
            level: 'All Level',
            hours: 18,
            students: 31,
            date: '22 April 2021',
            price: 1250000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'The Bootstrap 4 Bootcamp 2021',
            image: 'https://img-a.udemycdn.com/course/480x270/1968412_f5f5_5.jpg?',
            instructor: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 16,
            date: '23 April 2021',
            price: 180000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
            image: 'https://img-a.udemycdn.com/course/480x270/995016_ebf4_3.jpg',
            instructor: 'Shandika Galih',
            level: 'Middle',
            hours: 18,
            students: 26,
            date: '25 April 2021',
            price: 2500000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'The Complete React Developer Course (w/ Hooks and Redux)',
            image: 'https://img-a.udemycdn.com/course/480x270/1286908_1773_6.jpg',
            instructor: 'Andar Pratama',
            level: 'Middle',
            hours: 18,
            students: 22,
            date: '26 April 2021',
            price: 1750000,
            category: 'frontend'
         },
         {
            id: '03033993',
            title: 'Angular - The Complete Guide (2021 Edition)',
            image: 'https://img-a.udemycdn.com/course/480x270/756150_c033_2.jpg',
            instructor: 'Aji Wahyugi',
            level: 'Middle',
            hours: 18,
            students: 36,
            date: '27 April 2021',
            price: 1250000,
            category: 'frontend'
         },
      ]
   }

   getCourseBackend() {
      return [
         {
            id: '03033993',
            title: 'PHP Course for Beginners 2021',
            image: 'https://img-b.udemycdn.com/course/480x270/1576856_1e49.jpg',
            instructor: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 10,
            date: '19 April 2021',
            price: 1900000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'PHP with PDO: Build a Basic Task List with PHP, PDO & MySQL',
            image: 'https://img-a.udemycdn.com/course/480x270/787164_60d0_3.jpg',
            instructor: 'Aji Wahyugi',
            level: 'All Level',
            hours: 18,
            students: 18,
            date: '20 April 2021',
            price: 1450000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'E-Commerce Website in PHP & MySQL From Scratch!',
            image: 'https://img-a.udemycdn.com/course/480x270/267560_d924_12.jpg',
            instructor: 'Doni Firmansyah',
            level: 'All Level',
            hours: 18,
            students: 27,
            date: '21 April 2021',
            price: 1500000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'Learn Python Programming Masterclass 2021',
            image: 'https://img-a.udemycdn.com/course/480x270/629302_8a2d_2.jpg',
            instructor: 'Shandika Galih',
            level: 'All Level',
            hours: 18,
            students: 31,
            date: '22 April 2021',
            price: 1250000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'Node.js: The Complete Guide to Build RESTful APIs (2018)',
            image: 'https://img-a.udemycdn.com/course/480x270/1638522_fbdf.jpg',
            instructor: 'Andar Pratama',
            level: 'All Level',
            hours: 18,
            students: 16,
            date: '23 April 2021',
            price: 180000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
            image: 'https://img-a.udemycdn.com/course/480x270/995016_ebf4_3.jpg',
            instructor: 'Shandika Galih',
            level: 'Middle',
            hours: 18,
            students: 26,
            date: '25 April 2021',
            price: 2500000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'The Complete React Developer Course (w/ Hooks and Redux)',
            image: 'https://img-a.udemycdn.com/course/480x270/1286908_1773_6.jpg',
            instructor: 'Andar Pratama',
            level: 'Middle',
            hours: 18,
            students: 22,
            date: '26 April 2021',
            price: 1750000,
            category: 'backend'
         },
         {
            id: '03033993',
            title: 'Angular - The Complete Guide (2021 Edition)',
            image: 'https://img-a.udemycdn.com/course/480x270/756150_c033_2.jpg',
            instructor: 'Aji Wahyugi',
            level: 'Middle',
            hours: 18,
            students: 36,
            date: '27 April 2021',
            price: 1250000,
            category: 'backend'
         },
      ]
   }
}
