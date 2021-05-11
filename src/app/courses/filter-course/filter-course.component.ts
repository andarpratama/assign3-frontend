import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { FilterCourseModule } from './filter-course.module';

@Component({
  selector: 'app-filter-course',
  templateUrl: './filter-course.component.html',
  styleUrls: ['./filter-course.component.css']
})
export class FilterCourseComponent implements OnInit {
  @Input() item: FilterCourseModule
  constructor(private filterService : FilterService) { }

  ngOnInit(): void {
  }

}
