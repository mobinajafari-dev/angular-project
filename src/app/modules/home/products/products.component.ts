import { Component } from '@angular/core';
import { IProducts } from '@shared';
import { IPost } from 'src/app/shared/Interfaces/post';

@Component({
  selector: 'products-us',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productInfo: IProducts;
  postCarosel: IPost[];
  // product information
  constructor() {
    this.productInfo = {
      id: 1,
      title: 'لورم اپیسوم',
      price: 100000000,
      category: 'دکوراسیون',
      colors: ['آبی'],
      sizes: ['xs'],
      description: 'لورم اپیسوم',
      images: [],
      comments: [],
      videoUrls: [],
    };
    this.postCarosel = [
      {
        title: 'لورم اپیسوم',
        price: 100000,
        whishlist: false,
        category: 'لورم اپیسوم',
      },
    ];
  }
  // icon size
  productIconSize: number = 22;
}
