import { Component, OnInit } from '@angular/core';
import { CoursesModule } from 'src/app/home/courses.module';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular-course',
  templateUrl: './popular-course.component.html',
  styleUrls: ['./popular-course.component.css']
})
export class PopularCourseComponent implements OnInit {
  popularcourse : CoursesModule[]
  constructor( private courseService : CourseService ) { }

  ngOnInit(): void {
    this.popularcourse = this.courseService.getPopularCourse();
  }

}
