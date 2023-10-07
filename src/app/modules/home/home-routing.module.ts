import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: BodyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
