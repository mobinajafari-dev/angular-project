import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-body',
  templateUrl: './body.component.html',
  styles: [],
})
export class BodyComponent implements OnInit {
  // definition
  loginForm!: FormGroup;

  loginTitle: string = 'ورود';
  emailInput: string = 'ایمیل';
  passwordInput: string = 'رمز عبور';

  loginLinks: { title: string; path: string }[] = [
    { title: 'ثبت نام', path: '/login/register' },
    { title: 'فراموشی رمز عبور', path: '/login/forget-password' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  // function

  loginFormFunc(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    this.loginFormFunc();
  }
}
