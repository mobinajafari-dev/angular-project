import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
// import { PostComponent } from './Components/shared-component.api';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonModule],
})
export class SharedModule {}
