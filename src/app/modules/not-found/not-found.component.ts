import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent {
  constructor(private router: Router) {}
  onChangeRoute(): void {
    this.router.navigate(['home']);
  }
  notFoundTitle1: string = 'ERROR 404';
  notFoundTitle2: string = 'NOT FOUND';
  notFoundDescription1: string = 'صفحه مورد نظر یافت نشد';
  notFoundDescription2: string =
    'ممکن است این صفحه حذف شده یا در حال تعمیر باشد...';
  notFoundButton: string = 'بازگشت به خانه';
}
