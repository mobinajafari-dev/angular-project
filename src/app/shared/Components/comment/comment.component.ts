import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IComment } from '../../Interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  // definitions

  commentTitle: string = 'نظرات';
  setCommentTitle: string = 'ارسال نظر';
  setCommentUsernameInput: string = 'نام کاربری';
  setCommentEmailInput: string = 'ایمیل';
  setCommentTextareaInput: string = 'لطفا نظر خود را در اینجا تایپ کنید';
  setCommentButton: string = 'ارسال';
  requiredErrorMessage: string = 'این فیلد الزامی است';
  emailErrorMessage: string = 'ایمیل به درستی وارد نشده است';

  commentForm!: FormGroup;

  comments: IComment[] = [
    {
      username: 'username1',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت اول کامنت کامنت کامنت کامنت کامنت',
    },
    {
      username: 'username2',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت دوم کامنت کامنت کامنت کامنت کامنت',
    },
    {
      username: 'username3',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت سوم کامنت کامنت کامنت کامنت کامنت',
    },
    {
      username: 'username4',
      profile: 'https://img.icons8.com/ios/50/user-male-circle--v1.png',
      content: 'کامنت چهارم کامنت کامنت کامنت کامنت کامنت',
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  //functions

  commentFormFunc(): void {
    this.commentForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      content: [null, Validators.required],
    });
  }

  // life cycle methods

  ngOnInit() {
    this.commentFormFunc();
  }
}
