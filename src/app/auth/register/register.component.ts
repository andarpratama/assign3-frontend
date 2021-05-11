import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('formResult') registerForm : NgForm
  formGroup: FormGroup
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onRegister() {
    if (this.formGroup.valid) {
      this.authService.createUser(this.formGroup.value)
    }
  }



}
