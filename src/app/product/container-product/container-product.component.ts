import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { FilterService } from 'src/app/services/filter.service';
import { FilterModule } from '../filter/filter.module';

@Component({
  selector: 'app-container-product',
  templateUrl: './container-product.component.html',
  styleUrls: ['./container-product.component.css']
})
export class ContainerProductComponent implements OnInit {
  filterHours : FilterModule
  filterTopic : FilterModule
  filterCategory : FilterModule
  filterLevel : FilterModule
  course : any
  constructor(private filterService : FilterService, private courseService : CourseService) { }

   ngOnInit(): void {
     this.filterHours = this.filterService.getFilterHours()
     this.filterTopic = this.filterService.getFilterTopic()
     this.filterCategory = this.filterService.getFilterCategory()
     this.filterLevel = this.filterService.getFilterLevel()
     this.course = this.courseService.getCourseFrontend()
  }

}
