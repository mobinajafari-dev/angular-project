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

  firstNameErrorMessage: string = 'نام خود را وارد کنید';

  contactUsForm!: FormGroup;

  contactUsTitle: string = 'ارتباط با ما';
  contactUsDescription: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
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

    const firstNameControl = this.contactUsForm.get('userFirstName');

    firstNameControl?.valueChanges.subscribe((x) => {
      this.validateFirstNameControl(firstNameControl as FormControl);
    });
  }

  // this.indexFormGroup = formBuilder.group({
  //   firstparasm: new FormControl(),
  //   firstNested: formBuilder.group({
  //     secondNested: formBuilder.group({}),
  //   }),
  // });

  private validateFirstNameControl(firstNameControl: FormControl): void {
    this.firstNameErrorMessage;
    if (
      (firstNameControl.errors && firstNameControl.touched) ||
      firstNameControl.dirty
    ) {
      if (firstNameControl.errors?.['required']) {
        this.firstNameErrorMessage = 'لطفا فیلد را پر کنید';
      } else if (firstNameControl.errors?.['minLength']) {
        this.firstNameErrorMessage = 'نام باید حداقل 3 کارکتر داشته اشد';
      }
    }
  }

  onSubmit() {
    console.log(this.contactUsForm);
  }
}
