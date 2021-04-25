import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

   constructor() { }
   
   logStatusChange(status: string): void {
      console.log('a service status change, new status:' + status)
   }
}
