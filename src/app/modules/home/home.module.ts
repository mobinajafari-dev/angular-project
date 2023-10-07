import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [HomeComponent, MenuComponent, BodyComponent, FooterComponent],
  imports: [RouterModule, HomeRoutingModule, SharedModule, CommonModule],
  exports: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CommonModule,
    SharedModule,
  ],
})
export class HomeModule {}
