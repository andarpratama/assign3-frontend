import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ICourses } from 'src/interface/ICourses';

@Component({
  selector: 'app-container-detail',
  templateUrl: './container-detail.component.html',
  styleUrls: ['./container-detail.component.css']
})
export class ContainerDetailComponent implements OnInit {
  title = "Detail Course"
  course: ICourses
  id:string
  constructor(private courseService: CourseService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.id = this.router.snapshot.params['id']
    this.courseService.getOneCourse(this.id)
      .subscribe((result: any) => {
        this.course = result.data
        this.title = result.data.title
      })
  }
}
