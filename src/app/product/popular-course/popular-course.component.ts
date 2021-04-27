import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { PopularCourseModule } from './popular-course.module';

@Component({
  selector: 'app-popular-course',
  templateUrl: './popular-course.component.html',
  styleUrls: ['./popular-course.component.css']
})
export class PopularCourseComponent implements OnInit {
  popularcourse : PopularCourseModule[]
  constructor( private courseService : CourseService ) { }

  ngOnInit(): void {
    this.popularcourse = this.courseService.getPopularCourse();
  }

}
