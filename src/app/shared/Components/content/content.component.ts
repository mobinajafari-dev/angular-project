import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { IContent } from '../../Interfaces/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Input() contentData: IContent | undefined;
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
