import { Component } from '@angular/core';
import { IMenu } from '@shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  //interface
  footerItems: IMenu[];
  // footer content
  footerCopyRight: string = '© 2023 mobina jafari';
  // fourth column of footer
  footerColumn4: string = 'طرف قرارداد با';
  footerAddressInfo: string =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده';
  footerAddressTitle: string = 'آدرس';
  footerPhoneTitle: string = 'با ما تماس بگیرید';
  footerPhoneInfo: string = '+000-000-0000';
  // email getter variables
  emailPlaceHolder: string = 'ایمیل خود را وارد کنید';
  emailDescription: string = 'برای اطلاع از آخرین تخفیف ها عضو شوید';
  emailTitle: string = 'با ما در ارتباط باشید';
  emailButton: string = 'خبرم کنید';
  constructor() {
    this.footerItems = [
      {
        id: 'منو',
        items: [
          { title: 'خانه', path: '/home' },
          { title: 'درباره ما', path: '/home/about-us' },
          { title: 'ارتباط با ما', path: '/home/contact-us' },
        ],
      },
      {
        id: 'مطالب برگزیده',
        items: [
          { title: 'ورود', path: '/login' },
          { title: 'محصولات', path: '/home/products' },
          { title: 'بلاگ', path: '/home/blog' },
        ],
      },
      {
        id: 'محصولات',
        items: [
          { title: 'جدید ترین', path: '/home/products' },
          { title: 'پرفروش ترین', path: '/home/products' },
        ],
      },
    ];
  }
}
