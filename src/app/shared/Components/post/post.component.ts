import { Component, Input } from '@angular/core';
import { IProduct } from '../../Interfaces/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() postData: IProduct | undefined;
  postButtonLabel = 'مشاهده';
  constructor(private router: Router) {}
  onMoreDetails() {
    this.router.navigate([`home/products/${this.postData?.id}`]);
  }
}
