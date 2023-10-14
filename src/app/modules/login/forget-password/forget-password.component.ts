import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  forgetPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  // form
  forgetPasswordFormFunc() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.forgetPasswordFormFunc();
  }
}
