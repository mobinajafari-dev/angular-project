import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
// import { PostComponent } from './Components/shared-component.api';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, DividerModule, FormsModule],
  exports: [ButtonModule, DividerModule, FormsModule, CommonModule],
})
export class SharedModule {}
