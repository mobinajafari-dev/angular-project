import { Component } from '@angular/core';
import { Menu } from '@shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  footerItems: Menu[];
  constructor() {
    this.footerItems = [
      {
        id: 'منو',
        title: ['درباره ما', 'ارتباط با ما', 'خانه'],
        path: ['/about-us', '/contact-us', '/home'],
      },
    ];
  }
}
