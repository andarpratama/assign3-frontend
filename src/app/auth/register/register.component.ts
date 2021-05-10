import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('formResult') registerForm : NgForm
  constructor() { }

  ngOnInit(): void {
  }
   
   onRegister() {

      const formValue = this.registerForm.form.value;
      
      if (!this.registerForm.valid) {
         console.log('Invalid')
         return false
      } else {
         console.log('Valid')
      }
   }

}
