import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../login/body/body.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', component: BodyComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
