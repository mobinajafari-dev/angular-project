import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './Components/shared-component.api';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostComponent],
  exports: [],
})
export class SharedModule {}
