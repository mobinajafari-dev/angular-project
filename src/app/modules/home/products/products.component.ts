import { Component, OnInit } from '@angular/core';
import { IProducts } from '@shared';
import { IComments } from '@shared';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-us',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // definitions

  value!: number;
  valueUsername: string | undefined;
  activeItem: MenuItem | undefined;
  items: MenuItem[] | undefined;
  productInfo: IProducts;
  toggleComment: boolean = false;

  productCommentButton: string = 'ارسال نظر';
  productSendComment: string = 'ثبت نظر';

  onToggleComment(): boolean {
    console.log(this.toggleComment);
    return (this.toggleComment = !this.toggleComment);
  }

  constructor() {
    // product information``````````````````````````````````````````````````````````````````````````````````````````````````
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

    // tab menu
  }

  ngOnInit() {
    this.items = [
      { label: 'نحوه ارسال' },
      { label: 'کامنت' },
      { label: 'گارانتی محصول' },
      { label: 'توضیحات' },
    ];
    this.activeItem = this.items[0];
  }

  // icon size

  productIconSize: number = 22;
}
