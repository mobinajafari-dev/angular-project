import { Component } from '@angular/core';
import { Menu } from '@shared';

@Component({
  selector: 'app-menu',
  templateUrl: `./menu.component.html`,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: Menu[];
  constructor() {
    this.menuItems = [
      { id: 1, title: ' خانه', path: '/home' },
      { id: 2, title: ' درباره ما', path: '/about-us' },
      { id: 3, title: ' محصولات', path: '/products' },
      { id: 4, title: ' ارتباط با ما', path: '/contact-us' },
      { id: 5, title: ' بلاگ', path: '/blog' },
      { id: 6, title: ' ورود', path: '/login' },
    ];
  }
}
