import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RupiahFormatService {

   constructor() { }
   
   generateRupiahFormat(bilangan:number) {
      let reverse:string = bilangan.toString().split('').reverse().join('')
      let ribuan:any = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join('.').split('').reverse().join('');
      return ribuan
   }
}
