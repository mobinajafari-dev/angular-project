import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IProducts } from '@shared';
import { TabMenu } from 'primeng/tabmenu';

@Component({
  selector: 'products-us',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // definitions
  activeTabIndex = 0;
  shoppingCardButton: string = 'اضافه کردن به سبد خرید';
  productCommentButton: string = 'ارسال نظر';
  productSendComment: string = 'ثبت نظر';
  countValue: number = 0;
  productIconSize: number = 22;

  value!: number;
  valueUsername: string | undefined;
  toggleComment: boolean = false;
  productInfo: IProducts;

  indexFormGroup!: FormGroup;

  menuTabs: { label: string; content: string }[];

  onToggleComment(): boolean {
    console.log(this.toggleComment);
    return (this.toggleComment = !this.toggleComment);
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  constructor(private formBuilder: FormBuilder) {
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
    };
    this.indexFormGroup = formBuilder.group({
      firstparasm: new FormControl(),
      firstNested: formBuilder.group({
        secondNested: formBuilder.group({}),
      }),
    });
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

  ngOnInit() {}

  // icon size
}
