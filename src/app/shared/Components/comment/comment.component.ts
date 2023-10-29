import { Component, Input } from '@angular/core';
import { IComment } from '../../Interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() commentData: IComment | undefined;
  commentTitle: string = 'نظرات';
  constructor() {}
}
