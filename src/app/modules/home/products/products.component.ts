import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IProducts } from '@shared';

@Component({
  selector: 'products-us',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // definitions of variables
  productInfo: IProducts;
  activeTabIndex = 0;
  shoppingCardButton: string = 'اضافه کردن به سبد خرید';
  productCommentButton: string = 'ارسال نظر';
  productSendComment: string = 'ثبت نظر';
  whishlistButtonContent: string = 'اضافه کردن به علاقه مندی ها';

  value!: number;
  valueUsername: string | undefined;

  // icon size

  productIconSize: number = 22;

  // form definitions

  commentForm!: FormGroup;

  menuTabs: { label: string; content: string }[];

  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) {
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

  ngOnInit() {
    this.commentFormFunc();
  }

  // functions

  scrollToComment() {
    const element = this.elementRef.nativeElement.querySelector('#comment');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  commentFormFunc() {
    this.commentForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      comment: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
    });
  }
}
