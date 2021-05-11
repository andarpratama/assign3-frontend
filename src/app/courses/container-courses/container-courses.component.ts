import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { FilterService } from 'src/app/services/filter.service';
import { FilterCourseModule } from '../filter-course/filter-course.module';

@Component({
  selector: 'app-container-courses',
  templateUrl: './container-courses.component.html',
  styleUrls: ['./container-courses.component.css']
})
export class ContainerCoursesComponent implements OnInit {
  filterHours : FilterCourseModule
  filterTopic : FilterCourseModule
  filterCategory : FilterCourseModule
  filterLevel : FilterCourseModule
  course : any
  constructor(private filterService : FilterService, private courseService : CourseService) { }

  ngOnInit(): void {
     this.filterHours = this.filterService.getFilterHours()
     this.filterTopic = this.filterService.getFilterTopic()
     this.filterCategory = this.filterService.getFilterCategory()
     this.filterLevel = this.filterService.getFilterLevel()
     this.course = this.courseService.getAllCourse()
     console.log(this.course);
  }

}
