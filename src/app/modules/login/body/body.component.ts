import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    { id: 1, items: [{ title: 'بازگشت به خانه', path: '/home' }] },
    {
      id: 2,
      items: [{ title: 'فراموشی رمز عبور', path: '/login/forget-password' }],
    },
    { id: 3, items: [{ title: 'ثبت نام', path: '/login/register' }] },
  ];

  // error messages

  emailValidationMessage: string = '';
  passwordValidationMessage: string = '';
  requiredErrorMessage: string = 'این فیلد الزامی است';
  emailErrorMessage: string = 'ایمیل معتبر نیست';
  passwordErrorMessage: string = 'رمز معتبر نیست';
  emailControl: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginFormFunc();
    this.emailValidate();
    this.passwordValidate();
  }

  // function

  loginFormFunc(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  validateEmailControl(emailControl: FormControl) {
    this.emailValidationMessage;
    if ((emailControl.touched && emailControl.errors) || emailControl.dirty) {
      if (emailControl.errors?.['required']) {
        this.emailValidationMessage = this.requiredErrorMessage;
      } else if (emailControl.errors?.['email']) {
        this.emailValidationMessage = this.emailErrorMessage;
      }
    }
  }

  emailValidate() {
    const emailControl = this.loginForm.get('email');
    emailControl?.valueChanges.subscribe((x) => {
      this.validateEmailControl(emailControl as FormControl);
    });
  }

  validatePasswordControl(passwordControl: FormControl) {
    this.passwordValidationMessage;
    if (
      (passwordControl.errors && passwordControl.invalid) ||
      passwordControl.dirty
    ) {
      if (passwordControl.errors?.['required']) {
        this.passwordValidationMessage = this.requiredErrorMessage;
      } else if (passwordControl.errors?.['minlength']) {
        this.passwordValidationMessage = this.passwordErrorMessage;
      }
    }
  }

  passwordValidate() {
    const passwordControl = this.loginForm.get('password');
    passwordControl?.valueChanges.subscribe((x) => {
      this.validatePasswordControl(passwordControl as FormControl);
    });
  }
}
