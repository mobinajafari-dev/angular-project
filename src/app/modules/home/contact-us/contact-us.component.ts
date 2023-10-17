import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  // definitions

  contactUsButton: string = 'ارسال';
  contactUsTitle: string = 'ارتباط با ما';
  contactUsDescription: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';

  // error messages

  requiredErrorMessage: string = 'این فیلد الزامی است';
  emailErrorMessage: string = 'ایمیل معتبر نیست';
  minLengthErrorMessage: string = 'باید حداقل 3 کاراکتر وارد شود';
  maxLengthErrorMessage: string = 'باید حداکثر 18 کاراکتر وارد شود';
  firstNameValidationMessage: string = '';
  lastNameValidationMessage: string = '';
  phoneValidationMessage: string = '';
  emailValidationMessage: string = '';
  contentValidationMessage: string = '';

  contactUsForm!: FormGroup;

  // placeholder inputs
  firstNameInput: string = 'نام';
  lastNameInput: string = 'نام خانوادگی';
  phoneInput: string = 'شماره همراه';
  emailInput: string = 'ایمیل';
  topicInput: string = 'عنوان';
  commentInput: string = 'کامنت مورد نظر خود را در اینجا تایپ کنید';

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.contactUsFormFunc();
    this.firstNameValidate();
    this.lastNameValidate();
    this.phoneValidate();
    this.emailValidate();
    this.contentValidate();
  }

  // this.contactUsForm = new FormGroup({
  //   userData: new FormGroup({
  //     userFirstName: new FormControl(null, [Validators.required]),
  //     userLastName: new FormControl(null, [Validators.required]),
  //   }),
  //   userContact: new FormGroup({
  //     userEmail: new FormControl(null, [
  //       Validators.required,
  //       Validators.email,
  //     ]),
  //     userPhone: new FormControl(null, [Validators.required]),
  //   }),
  //   userComment: new FormGroup({
  //     topic: new FormControl(null, [Validators.required]),
  //     comment: new FormControl(null, [Validators.required]),
  //   }),
  // });

  // this.contactUsForm.errors?.['required'];

  // const firstNameControl = this.contactUsForm.get([
  //   'userData',
  //   'userFirstName',
  // ]);

  // firstNameControl?.valueChanges.subscribe((x) => {
  //   this.validateFirstNameControl(firstNameControl as FormControl);
  // });

  // this.indexFormGroup = formBuilder.group({
  //   firstparasm: new FormControl(),
  //   firstNested: formBuilder.group({
  //     secondNested: formBuilder.group({}),
  //   }),
  // });

  // private validateFirstNameControl(firstNameControl: FormControl): void {
  //   this.firstNameErrorMessage;
  //   if (
  //     (firstNameControl.errors && firstNameControl.touched) ||
  //     firstNameControl.dirty
  //   ) {
  //     if (firstNameControl.errors?.['required']) {
  //       this.firstNameErrorMessage = 'لطفا فیلد را پر کنید';
  //     } else if (firstNameControl.errors?.['minLength']) {
  //       this.firstNameErrorMessage = 'نام باید حداقل 3 کارکتر داشته اشد';
  //     }
  //   }
  // }

  // function

  contactUsFormFunc(): void {
    this.contactUsForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        userFirstName: [null, [Validators.required, Validators.minLength(3)]],
        userLastName: [null, [Validators.required, Validators.minLength(3)]],
      }),
      userContact: this.formBuilder.group({
        userEmail: [null, [Validators.required, Validators.email]],
        userPhone: [null, [Validators.required, Validators.maxLength(18)]],
      }),
      userComment: this.formBuilder.group({
        topic: [null],
        content: [null, [Validators.required]],
      }),
    });
  }

  onSubmit() {
    console.log(this.contactUsForm);
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
    const firstNameControl = this.contactUsForm.get(['userData', 'firstName']);
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
    const lastNameControl = this.contactUsForm.get(['userData', 'lastName']);
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
    const phoneControl = this.contactUsForm.get(['userContact', 'phone']);
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
    const emailControl = this.contactUsForm.get(['userContact', 'content']);
    emailControl?.valueChanges.subscribe((x) => {
      this.validateEmailControl(emailControl as FormControl);
    });
  }

  // content validation

  validateContentControl(contentControl: FormControl) {
    this.contentValidationMessage;
    if (
      (contentControl.touched && contentControl.errors) ||
      contentControl.dirty
    ) {
      if (contentControl.errors?.['required']) {
        this.contentValidationMessage = this.requiredErrorMessage;
      } else if (contentControl.errors?.['minlength']) {
        this.contentValidationMessage = this.minLengthErrorMessage;
      }
    }
  }

  contentValidate() {
    const contentControl = this.contactUsForm.get('content');
    contentControl?.valueChanges.subscribe((x) => {
      this.validateContentControl(contentControl as FormControl);
    });
  }
}
