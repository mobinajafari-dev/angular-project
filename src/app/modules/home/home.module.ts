import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@shared';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HomeComponent, MenuComponent, BodyComponent, FooterComponent],
  imports: [
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    ButtonModule,
    CommonModule,
    GalleriaModule,
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CommonModule,
    SharedModule,
    GalleriaModule,
    ButtonModule,
  ],
})
export class HomeModule {}
