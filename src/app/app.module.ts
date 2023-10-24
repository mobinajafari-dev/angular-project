import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from '@shared';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { LoginModule } from './modules/login/login.module';
import { TestComponent } from './modules/test/test.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
