import { Component } from '@angular/core';
import { IProduct } from '@shared';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent {
  productPosts!: IProduct[];
  baseURL = 'https://fakestoreapi.com';
  endpoint = 'products';
  constructor(private product: ProductsService) {
    this.product.getData(this.baseURL, this.endpoint).subscribe((data) => {
      this.productPosts = data;
    });
  }
}
