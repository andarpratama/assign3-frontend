import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {
  @Input() item: any
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
