import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  // definitions

  contactUsTitle: string = 'ارتباط با ما';
  contactUsDescription: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';
  contactInputs: { title: string; type: string; value: string | undefined }[] =
    [
      { title: 'نام کاربری', type: 'text', value: 'username' },
      { title: 'عنوان', type: 'text', value: 'phone' },
      { title: 'ایمیل', type: 'email', value: 'email' },
      { title: 'شماره همراه', type: 'text', value: 'phone' },
    ];
}
