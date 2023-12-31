import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BodyComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'blog/:id', component: BlogsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
