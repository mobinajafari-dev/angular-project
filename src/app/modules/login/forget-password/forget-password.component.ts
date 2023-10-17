import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IMenu } from '@shared';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styles: [],
})
export class ForgetPasswordComponent implements OnInit {
  // definitions
  forgetPasswordTitle: string = 'فراموشی رمز عبور';
  forgetPasswordContent: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';
  emailInput: string = 'ایمیل';
  backToHomeButton: string = 'بازگشت به خانه';
  forgetPasswordButton: string = 'بازیابی رمز عبور';

  emailValidateMessage: string = '';

  // error messages

  firstNameValidationMessage: string = '';

  requiredErrorMessage: string = 'این فیلد الزامی است';
  emailErrorMessage: string = 'ایمیل معتبر نیست';

  forgetPasswordLinks: IMenu[] = [
    { id: 1, items: [{ title: 'بازگشت به خانه', path: '/home' }] },
    { id: 2, items: [{ title: 'ورود', path: '/login' }] },
  ];

  forgetPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.forgetPasswordFormFunc();
    this.validateEmail();
  }

  // function
  forgetPasswordFormFunc() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  validateEmailControl(emailControl: FormControl) {
    this.emailValidateMessage;
    if ((emailControl.errors && emailControl.touched) || emailControl.dirty) {
      if (emailControl.errors?.['required']) {
        this.emailValidateMessage = this.requiredErrorMessage;
      } else if (emailControl.errors?.['email']) {
        this.emailValidateMessage = this.emailErrorMessage;
      }
    }
  }

  validateEmail() {
    const emailControl = this.forgetPasswordForm.get('email');
    emailControl?.valueChanges.subscribe((x) => {
      this.validateEmailControl(emailControl as FormControl);
    });
  }
}
