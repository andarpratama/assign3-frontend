import { Component, Input, OnInit } from '@angular/core';
import { ICourses } from 'src/interface/ICourses';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  @Input() course: ICourses
  constructor() { }

  ngOnInit(): void {
  }

}
