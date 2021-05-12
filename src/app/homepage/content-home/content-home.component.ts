import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/interface/ICourse';
import { CoursesModule } from 'src/app/modules/course/course.module';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent implements OnInit {

  frontends : ICourse[]
  backends : ICourse[]
   constructor(private courseService : CourseService) {}

  ngOnInit(): void {
  this.frontends = this.courseService.getCourseFrontend()
  this.backends = this.courseService.getCourseBackend()
  }
}
