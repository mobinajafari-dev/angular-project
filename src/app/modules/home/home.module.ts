import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent,
    ContactUsComponent,
    AboutUsComponent,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CommonModule,
    SharedModule,
  ],
  imports: [RouterModule, HomeRoutingModule, CommonModule, SharedModule],
})
export class HomeModule {}
