import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@shared';
import { ButtonModule } from 'primeng/button';

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
}
