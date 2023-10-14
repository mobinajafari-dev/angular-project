import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login.component';
import { BodyComponent } from './body/body.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    BodyComponent,
    ForgetPasswordComponent,
  ],
  imports: [RouterModule, LoginRoutingModule, SharedModule, CommonModule],
  exports: [
    RegisterComponent,
    LoginComponent,
    BodyComponent,
    ForgetPasswordComponent,
    SharedModule,
    CommonModule,
  ],
})
export class LoginModule {}
