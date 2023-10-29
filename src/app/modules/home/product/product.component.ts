import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IComment, IProduct } from '@shared';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  commentTitle: string = 'نظرات';

  // url
  id: string = '';
  baseURL = 'https://fakestoreapi.com';
  endpoint = `products/${this.id}`;

  // product info

  productInfo!: IProduct;

  // definitions of variables
  activeTabIndex = 0;
  shoppingCardButton: string = 'اضافه کردن به سبد خرید';
  productCommentButton: string = 'ارسال نظر';
  productSendComment: string = 'ثبت نظر';
  whishlistButtonContent: string = 'اضافه کردن به علاقه مندی ها';
  value!: number;
  valueUsername: string | undefined;
  // form definitions

  commentForm!: FormGroup;

  menuTabs: { label: string; content: string }[] = [
    {
      label: 'نحوه ارسال',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و نحوه ارسال',
    },
    {
      label: 'گارانتی',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و گارانتی',
    },
    {
      label: 'توضیحات',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و توضیحات',
    },
  ];

  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private product: ProductsService
  ) {}

  // life cycle methods

  ngOnInit() {}

  // functions

  scrollToComment() {
    const element = this.elementRef.nativeElement.querySelector('#comment');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  // product comment

  productComments: IComment[] = [
    {
      username: 'username1',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت اول کامنت کامنت کامنت کامنت کامنت',
    },
    {
      username: 'username2',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت دوم کامنت کامنت کامنت کامنت کامنت',
    },
    {
      username: 'username3',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت سوم کامنت کامنت کامنت کامنت کامنت',
    },
    {
      username: 'username4',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت چهارم کامنت کامنت کامنت کامنت کامنت',
    },
  ];
}
