import { Component, Input, OnInit } from '@angular/core';
import { CoursesModule } from 'src/app/courses/courses.module';
import { ICourses } from 'src/app/interface/ICourses';

@Component({
  selector: 'app-card-learn',
  templateUrl: './card-learn.component.html',
  styleUrls: ['./card-learn.component.css']
})
export class CardLearnComponent implements OnInit {
  @Input() item: ICourses
  constructor() { }

  ngOnInit(): void {
  }

  generateRupiahFormat(bilangan:number) {
      let reverse:string = bilangan.toString().split('').reverse().join('')
      let ribuan:any = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ribuan
   }


}
