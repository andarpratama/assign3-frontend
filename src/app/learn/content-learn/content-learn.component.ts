import { Component, OnInit } from '@angular/core';
import { ICourses } from '../../../interface/ICourses';
import { CourseService } from 'src/app/services/course.service';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-content-learn',
  templateUrl: './content-learn.component.html',
  styleUrls: ['./content-learn.component.css']
})
export class ContentLearnComponent implements OnInit {
  mycourse: ICourses[] = []
  coursemy: any
  user: any
  courses: any
  constructor(private courseService: CourseService, private authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe((result:any) => this.mycourse = result.data )
    this.user = this.authService.getUserId()
    let mycourse = this.coursemy
    this.cartService.getInfo().subscribe((response:any) => {
      mycourse = response.data.courseId
      console.log(mycourse)
      this.courses = []
      mycourse.forEach((id:string )=> {
        this.courseService.getOneCourse(id).subscribe((result: any) => {
          this.courses.push(result.data)
        })
      });
      console.log(this.courses)
    })
  }


}
