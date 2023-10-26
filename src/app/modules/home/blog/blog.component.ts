import { Component } from '@angular/core';
import { IContent } from '@shared';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [],
})
export class BlogComponent {
  blogButton: string = 'مشاهده بیشتر';
  loremIpsumContent: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ';
  loremIpsumTitle: string = 'لورم اپیسوم';
  blogContents: IContent[] = [
    {
      status: 'left',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-1.jpg',
      content: this.loremIpsumContent,
      widthImage: '200px',
    },
    {
      status: 'left',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-2.jpg',
      content: this.loremIpsumContent,
      widthImage: '200px',
    },
    {
      status: 'left',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-3.jpg',
      content: this.loremIpsumContent,
      widthImage: '200px',
    },
    {
      status: 'left',
      title: this.loremIpsumTitle,
      imageURL: '../../../../assets/images/about-us-4.jpg',
      content: this.loremIpsumContent,
      widthImage: '200px',
    },
  ];
}
