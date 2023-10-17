import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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

  emailValidationMessage: string = '';
  usernameValidationMessage: string = '';
  commentValidationMessage: string = '';

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

  // life cycle methods

  ngOnInit() {
    this.commentFormFunc();
    this.emailValidate();
    this.usernameValidate();
    this.commentValidate();
  }

  //functions

  commentFormFunc(): void {
    this.commentForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      content: [null, Validators.required],
    });
  }

  // email validation

  validateEmailControl(emailControl: FormControl) {
    this.emailValidationMessage;
    if ((emailControl.errors && emailControl.touched) || emailControl.dirty) {
      if (emailControl.errors?.['required']) {
        this.emailValidationMessage = this.requiredErrorMessage;
      } else if (emailControl.errors?.['email']) {
        this.emailValidationMessage = this.emailErrorMessage;
      }
    }
  }

  emailValidate() {
    const emailControl = this.commentForm.get('email');
    emailControl?.valueChanges.subscribe((x) => {
      this.validateEmailControl(emailControl as FormControl);
    });
  }

  // username validation

  validateUsernameControl(usernameControl: FormControl) {
    this.usernameValidationMessage;
    if (
      (usernameControl.errors && usernameControl.touched) ||
      usernameControl.dirty
    ) {
      if (usernameControl.errors?.['required']) {
        this.usernameValidationMessage = this.requiredErrorMessage;
      }
    }
  }

  usernameValidate() {
    const usernameControl = this.commentForm.get('username');
    usernameControl?.valueChanges.subscribe((x) => {
      this.validateUsernameControl(usernameControl as FormControl);
    });
  }

  // comment validation

  validateCommentControl(commentControl: FormControl) {
    this.commentValidationMessage;
    if (commentControl.errors?.['required']) {
      this.commentValidationMessage = this.requiredErrorMessage;
    }
  }

  commentValidate() {
    const commentControl = this.commentForm.get('content');
    commentControl?.valueChanges.subscribe((x) => {
      this.validateCommentControl(commentControl as FormControl);
    });
  }
}
