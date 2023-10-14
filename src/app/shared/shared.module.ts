import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { CommentComponent } from './Components/shared-component.api';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
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
    PasswordModule,
    CommentComponent,
    RatingModule,
  ],
})
export class SharedModule {}
