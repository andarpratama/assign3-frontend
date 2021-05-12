import { Component, Input, OnInit } from '@angular/core';
import { CoursesModule } from 'src/app/modules/course/course.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: CoursesModule
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
