import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
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
