import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IComment, IProducts } from '@shared';

@Component({
  selector: 'products-us',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  commentTitle: string = 'نظرات';
  // definitions of variables
  productInfo: IProducts;
  activeTabIndex = 0;
  shoppingCardButton: string = 'اضافه کردن به سبد خرید';
  productCommentButton: string = 'ارسال نظر';
  productSendComment: string = 'ثبت نظر';
  whishlistButtonContent: string = 'اضافه کردن به علاقه مندی ها';

  value!: number;
  valueUsername: string | undefined;

  // form definitions

  commentForm!: FormGroup;

  menuTabs: { label: string; content: string }[];

  constructor(private elementRef: ElementRef) {
    // product information

    this.productInfo = {
      id: 1,
      title: 'لورم اپیسوم',
      price: 100000000,
      category: 'دکوراسیون',
      colors: ['آبی'],
      sizes: ['xs', 'sm', 'md'],
      description: 'لورم اپیسوم',
      images: [],
      comments: [],
    };

    // tab menu

    this.menuTabs = [
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
  }

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
