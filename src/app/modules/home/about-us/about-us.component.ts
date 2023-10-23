import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { IContent } from '@shared';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, marginBottom: '3rem' })),
      transition(':enter,:leave', [animate('3s ease-in')]),
    ]),
    ,
  ],
})
export class AboutUsComponent {
  loremIpsumContent: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده';
  aboutUsTitle: string = 'درباره ما';
  loremIpsumTitle: string = 'لورم اپیسوم';
  aboutUsContents: IContent[] = [
    {
      status: 'right',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-1.jpg',
      content: this.loremIpsumContent,
      widthImage: '400px',
    },
    {
      status: 'left',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-2.jpg',
      content: this.loremIpsumContent,
      widthImage: '400px',
    },
    {
      status: 'right',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-3.jpg',
      content: this.loremIpsumContent,
      widthImage: '400px',
    },
    {
      status: 'left',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-4.jpg',
      content: this.loremIpsumContent,
      widthImage: '400px',
    },
  ];
  socialMediaContents: IContent[] = [
    {
      status: 'icon',
      title: 'Facebook',
      content: 'over 10k followers',
      imageURL: 'https://img.icons8.com/ios/50/999999/facebook-new.png',
      widthImage: '',
    },
    {
      status: 'icon',
      title: 'Pinterest',
      content: 'over 10k followers',
      imageURL: 'https://img.icons8.com/ios/50/999999/pinterest--v1.png',
      widthImage: '',
    },
    {
      status: 'icon',
      title: 'Instagram',
      content: 'over 10k followers',
      imageURL: 'https://img.icons8.com/ios/50/999999/instagram-new--v1.png',
      widthImage: '',
    },
    {
      status: 'icon',
      title: 'Google',
      content: 'over 10k followers',
      imageURL: 'https://img.icons8.com/ios/50/999999/google-logo--v1.png',
      widthImage: '',
    },
  ];
}
