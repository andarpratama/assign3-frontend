import { Component, OnInit } from '@angular/core';
import { ICourses } from '../../../interface/ICourses';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-content-learn',
  templateUrl: './content-learn.component.html',
  styleUrls: ['./content-learn.component.css']
})
export class ContentLearnComponent implements OnInit {
  mycourse : ICourses[] = []
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe((result:any) => this.mycourse = result.data )
  }


}
