import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabMenuModule } from 'primeng/tabmenu';
// import { PostComponent } from './Components/shared-component.api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    TabMenuModule,
  ],
  exports: [
    ButtonModule,
    DividerModule,
    FormsModule,
    CommonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    TabMenuModule,
  ],
})
export class SharedModule {}
