import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMenu } from '@shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  //definition
  registerTitle: string = 'ثبت نام';
  registerForm!: FormGroup;
  registerLinks!: IMenu[];

  // error messages

  requiredErrorMessage: string = 'این فیلد الزامی است';
  emailErrorMessage: string = 'ایمیل معتبر نیست';
  passwordErrorMessage: string = 'رمز معتبر نیست';
  minLengthErrorMessage: string = 'باید حداقل 3 کاراکتر وارد شود';

  // input placeholder
  emailInput: string = 'ایمیل';
  phoneInput: string = 'شماره همراه';
  firstNameInput: string = 'نام';
  lastNameInput: string = 'نام خانوادگی';
  passwordInput: string = 'رمز عبور';
  addressInput: string = 'آدرس';
  postalCodeInput: string = 'کد پستی';

  registerButton: string = 'ثبت نام';

  constructor(private formBuilder: FormBuilder) {
    this.registerLinks = [
      { id: 1, items: [{ title: 'بازگشت به خانه', path: '/home' }] },
      { id: 2, items: [{ title: 'ورود  ', path: '/login' }] },
    ];
  }
  ngOnInit(): void {
    this.registerFormFunc();
  }

  // functions

  registerFormFunc() {
    this.registerForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [null, [Validators.required, Validators.minLength(3)]],
      }),
      userContact: this.formBuilder.group({
        phone: [null, Validators.required],
        email: [null, [Validators.email, Validators.required]],
      }),
      password: [null, [Validators.required, Validators.minLength(8)]],
      userAddress: this.formBuilder.group({
        address: [null],
        postalCode: [null],
      }),
    });
  }
}
