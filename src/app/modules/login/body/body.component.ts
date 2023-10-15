import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMenu } from '@shared';

@Component({
  selector: 'app-login-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  // definition
  loginForm!: FormGroup;

  loginTitle: string = 'ورود';
  emailInput: string = 'ایمیل';
  passwordInput: string = 'رمز عبور';

  loginLinks: IMenu[] = [
    { id: 1, items: [{ title: 'ثبت نام', path: '/login/register' }] },
    {
      id: 2,
      items: [{ title: 'فراموشی رمز عبور', path: '/login/forget-password' }],
    },
  ];

  // error messages

  requiredErrorMessage: string = 'این فیلد الزامی است';
  emailErrorMessage: string = 'ایمیل معتبر نیست';
  passwordErrorMessage: string = 'رمز معتبر نیست';

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
