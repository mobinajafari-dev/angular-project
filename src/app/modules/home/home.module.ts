import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeComponent, MenuComponent, BodyComponent, FooterComponent],
  imports: [RouterModule, HomeRoutingModule],
  exports: [HomeComponent, MenuComponent, BodyComponent, FooterComponent],
})
export class HomeModule {}
