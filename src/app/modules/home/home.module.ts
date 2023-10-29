import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    ProductComponent,
    ProductsComponent,
    ContactUsComponent,
    AboutUsComponent,
    BlogsComponent,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  imports: [RouterModule, HomeRoutingModule, CommonModule, SharedModule],
})
export class HomeModule {}
