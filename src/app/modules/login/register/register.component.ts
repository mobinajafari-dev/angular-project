import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  //definition
  registerTitle: string = 'ثبت نام';
  registerForm!: FormGroup;

  // input placeholder
  emailInput: string = 'ایمیل';
  phoneInput: string = 'شماره همراه';
  firstNameInput: string = 'نام';
  lastNameInput: string = 'نام خانوادگی';
  passwordInput: string = 'رمز عبور';

  constructor(private formBuilder: FormBuilder) {}

  // functions

  registerFormFunc() {
    this.registerForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.minLength(5)]],
        lastName: [null, [Validators.required, Validators.maxLength(5)]],
      }),
      userContact: this.formBuilder.group({
        phone: [null, Validators.required],
        email: [null, [Validators.email, Validators.required]],
      }),
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.registerFormFunc();
  }
}
