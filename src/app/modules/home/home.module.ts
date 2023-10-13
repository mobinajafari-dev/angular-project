import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { RatingModule } from 'primeng/rating';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent,
    ContactUsComponent,
  ],

  imports: [
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    CommonModule,
    RatingModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CommonModule,
    SharedModule,
    ButtonModule,
    RatingModule,
  ],
})
export class HomeModule {}
