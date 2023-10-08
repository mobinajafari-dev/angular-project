import { Component } from '@angular/core';
import { IMenu } from '@shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerItems: IMenu[];
  constructor() {
    this.footerItems = [
      {
        id: 'منو',
        items: [
          { title: 'خانه', path: '/home' },
          { title: 'درباره ما', path: '/about-us' },
          { title: 'ارتباط با ما', path: '/contact-us' },
        ],
      },
      {
        id: 'مطالب برگزیده',
        items: [
          { title: 'ورود', path: '/login' },
          { title: 'محصولات', path: '/products' },
          { title: 'بلاگ', path: '/blog' },
        ],
      },
      {
        id: 'محصولات',
        items: [
          { title: 'جدید ترین', path: '/new-arrivals' },
          { title: 'پرفروش ترین', path: '/best-sellers' },
        ],
      },
    ];
  }
}
