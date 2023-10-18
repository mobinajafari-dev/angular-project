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
import {
  CommentComponent,
  SocialMediaIconsComponent,
  ContentComponent,
} from './Components/shared-component.api';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { PostComponent } from './Components/post/post.component';

@NgModule({
  declarations: [
    CommentComponent,
    PostComponent,
    SocialMediaIconsComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    CarouselModule,
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
    CarouselModule,
    PostComponent,
    SocialMediaIconsComponent,
    ContentComponent,
  ],
})
export class SharedModule {}
