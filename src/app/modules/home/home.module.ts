import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [RouterModule, HomeRoutingModule],
  exports: [HomeComponent, MenuComponent],
})
export class HomeModule {}
