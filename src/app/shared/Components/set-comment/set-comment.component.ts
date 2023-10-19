import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-set-comment',
  templateUrl: './set-comment.component.html',
  styles: [],
})
export class SetCommnetComponent {
  // definitions

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
