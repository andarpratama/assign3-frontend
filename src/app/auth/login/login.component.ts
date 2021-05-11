import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ViewChild('formLogin') loginForm : NgForm
  formGroup: FormGroup
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onLogin() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value)
    }
  }

  // onLogin() {
  //   if (this.formGroup.valid) {
  //     this.authService.login(this.formGroup.value).subscribe((response) => {
  //       if (response.success) {
  //         console.log(response.data.bearerToken)
  //         alert(response.message)
  //       } else {
  //         console.log(response)
  //         alert(response.message)
  //       }
  //     })
  //   }
  // }


}
