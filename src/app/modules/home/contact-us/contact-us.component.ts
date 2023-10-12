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

  contactUsForm!: FormGroup;

  contactUsTitle: string = 'ارتباط با ما';
  contactUsDescription: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.contactUsForm = new FormGroup({
      userData: new FormGroup({
        userFirstName: new FormControl(null, [Validators.required]),
        userLastName: new FormControl(null, [Validators.required]),
      }),
      userContact: new FormGroup({
        userEmail: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
        userPhone: new FormControl(null, [Validators.required]),
      }),
      userComment: new FormGroup({
        topic: new FormControl(null, [Validators.required]),
        comment: new FormControl(null, [Validators.required]),
      }),
    });
  }

  // this.indexFormGroup = formBuilder.group({
  //   firstparasm: new FormControl(),
  //   firstNested: formBuilder.group({
  //     secondNested: formBuilder.group({}),
  //   }),
  // });

  onSubmit() {
    console.log(this.contactUsForm);
  }
}
