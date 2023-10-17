import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  passwordValidationMessage: string = '';
  firstNameValidationMessage: string = '';
  lastNameValidationMessage: string = '';
  phoneValidationMessage: string = '';
  emailValidationMessage: string = '';

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
  ngOnInit() {
    this.registerFormFunc();
    this.firstNameValidate();
    this.lastNameValidate();
    this.phoneValidate();
    this.emailValidate();
    this.passwordValidate();
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
  // first name validation

  validateFirstNameControl(firstNameControl: FormControl) {
    this.firstNameValidationMessage;
    if (
      (firstNameControl.errors && firstNameControl.touched) ||
      firstNameControl.dirty
    ) {
      if (firstNameControl.errors?.['required']) {
        this.firstNameValidationMessage = this.requiredErrorMessage;
      } else if (firstNameControl.errors?.['minlength']) {
        this.firstNameValidationMessage = this.minLengthErrorMessage;
      }
    }
  }

  firstNameValidate() {
    const firstNameControl = this.registerForm.get(['userData', 'firstName']);
    firstNameControl?.valueChanges?.subscribe((x) => {
      this.validateFirstNameControl(firstNameControl as FormControl);
    });
  }
  // last name validation

  validatelastNameControl(lastNameControl: FormControl) {
    this.lastNameValidationMessage;
    if (
      (lastNameControl.errors && lastNameControl.touched) ||
      lastNameControl.dirty
    ) {
      if (lastNameControl.errors?.['required']) {
        this.lastNameValidationMessage = this.requiredErrorMessage;
      } else if (lastNameControl.errors?.['minlength']) {
        this.lastNameValidationMessage = this.minLengthErrorMessage;
      }
    }
  }

  lastNameValidate() {
    const lastNameControl = this.registerForm.get(['userData', 'lastName']);
    lastNameControl?.valueChanges?.subscribe((x) => {
      this.validatelastNameControl(lastNameControl as FormControl);
    });
  }

  // phone validation

  validatePhoneControl(phoneControl: FormControl) {
    this.phoneValidationMessage;
    if ((phoneControl.touched && phoneControl.errors) || phoneControl.dirty) {
      if (phoneControl.errors?.['required']) {
        this.phoneValidationMessage = this.requiredErrorMessage;
      }
    }
  }

  phoneValidate() {
    const phoneControl = this.registerForm.get(['userContact', 'phone']);
    phoneControl?.valueChanges.subscribe((x) => {
      this.validatePhoneControl(phoneControl as FormControl);
    });
  }

  //email validation

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
    const emailControl = this.registerForm.get(['userContact', 'email']);
    emailControl?.valueChanges.subscribe((x) => {
      this.validateEmailControl(emailControl as FormControl);
    });
  }

  // password validation

  validatePasswordControl(passwordControl: FormControl) {
    this.passwordValidationMessage;
    if (
      (passwordControl.touched && passwordControl.errors) ||
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
    const passwordControl = this.registerForm.get('password');
    passwordControl?.valueChanges.subscribe((x) => {
      this.validatePasswordControl(passwordControl as FormControl);
    });
  }
}
