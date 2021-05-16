import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../interface/ICourse';
import { CoursesModule } from 'src/app/modules/course/course.module';
import { CourseService } from 'src/app/services/course.service';
import { ICourses } from 'src/interface/ICourses';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent implements OnInit {
  loaderFrontend: boolean = true
  loaderBackend: boolean = true
  frontends : ICourse[]
  backends: ICourse[]
  course : ICourses[] = []
   constructor(private courseService : CourseService) {}

  ngOnInit(): void {
    // this.frontends = this.courseService.getCourseFrontend()
    this.backends = this.courseService.getCourseBackend()

    this.courseService.getPosts('frontend')
      .subscribe((result: any) => {
        this.loaderFrontend = false
        this.frontends = result
      })

    this.courseService.getPosts('backend')
      .subscribe((result: any) => {
        this.loaderBackend = false
        this.backends = result
      console.log(this.backends)
    })

  }
}
