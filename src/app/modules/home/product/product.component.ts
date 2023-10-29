import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment, IProduct } from '@shared';
import { ProductsService } from '../services/products.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  commentTitle: string = 'نظرات';

  // url
  productId: string = '';
  baseURL = 'https://fakestoreapi.com';
  endpoint = `products`;

  // product info

  // definitions of variables
  activeTabIndex = 0;
  shoppingCardButton: string = 'اضافه کردن به سبد خرید';
  productCommentButton: string = 'ارسال نظر';
  productSendComment: string = 'ثبت نظر';
  whishlistButtonContent: string = 'اضافه کردن به علاقه مندی ها';
  valueUsername: string | undefined;
  value: number = 0;
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
  ];
  productInfo: IProduct | undefined;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private product: ProductsService
  ) {}

  // life cycle methods

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.getProduct(productId);
    });
  }

  // functions

  getProduct(productId: number) {
    this.product
      .getProductDetails(this.baseURL, this.endpoint, productId)
      .subscribe(
        (product) => {
          if (product) {
            this.productInfo = product;
            this.value = this.productInfo.rating.rate;
          } else {
            this.router.navigate(['/not-found']);
          }
        },
        (err) => {
          this.router.navigate(['/not-found']);
        }
      );
  }

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
