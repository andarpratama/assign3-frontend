import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { RupiahFormatService } from 'src/app/services/rupiah-format.service';
import { CoursesModule } from "../courses.module";

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.css'],
  providers: [RupiahFormatService]
})
export class ContainerCardComponent implements OnInit {
  frontends : CoursesModule[]
  backends : CoursesModule[]
   constructor(private courseService : CourseService) {}

   ngOnInit(): void {
     this.frontends = this.courseService.getCourseFrontend()
     this.backends = this.courseService.getCourseBackend()
  }

}
