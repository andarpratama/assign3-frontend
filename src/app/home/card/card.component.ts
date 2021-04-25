import { Component, OnInit, Input } from '@angular/core';
import { RupiahFormatService } from 'src/app/services/rupiah-format.service';
import { CoursesModule } from '../courses.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() item: CoursesModule
   frontends : CoursesModule[]
   constructor(public rupiahFormat: RupiahFormatService) {}

   ngOnInit(): void {
      
   }
   
   generateRupiahFormat(bilangan:number) {
      let reverse:string = bilangan.toString().split('').reverse().join('')
      let ribuan:any = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ribuan
   }

}
