import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PostComponent } from './Components/shared-component.api';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, DividerModule, BrowserAnimationsModule],
  exports: [ButtonModule, DividerModule, BrowserAnimationsModule],
})
export class SharedModule {}
