import { Component } from '@angular/core';
import { IMenu } from '@shared';

@Component({
  selector: 'app-menu',
  templateUrl: `./menu.component.html`,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: IMenu[];
  constructor() {
    this.menuItems = [
      { id: 1, items: [{ title: 'خانه', path: '/home' }] },
      { id: 2, items: [{ title: 'درباره ما', path: '/home/about-us' }] },
      { id: 3, items: [{ title: 'محصولات', path: '/home/products/:id' }] },
      { id: 4, items: [{ title: 'ارتباط با ما', path: '/home/contact-us' }] },
      { id: 5, items: [{ title: 'بلاگ', path: '/home/blogs' }] },
      { id: 6, items: [{ title: 'ورود', path: '/login' }] },
    ];
  }
}
