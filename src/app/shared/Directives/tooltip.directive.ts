import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { IPosition } from '../Interfaces/position';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  constructor(private renderer: Renderer2) {}

  // getting data with input from the host element

  // tooltip content

  @Input('appTooltip') tooltipText!: string;

  // tooltip placement

  @Input({ required: true }) placement!: 'right' | 'left' | 'bottom' | 'top';

  // tooltip offset by default is zero

  @Input() offset: number = 0;

  @HostListener('mouseenter', ['$event.target']) onMouseEnter(event: any) {
    this.hostElement = event;
    this.hostElementPosition = event.getBoundingClientRect();
    if (!this.tooltipElement) {
      this.createTooltip();
    }
    this.renderer.setStyle(this.tooltipElement, 'opacity', 1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.tooltipElement, 'opacity', 0);
  }

  // host and tooltip element position

  hostElementPosition!: IPosition;
  tooltipElementPosition!: IPosition;

  // host and tooltip element

  private tooltipElement!: HTMLElement;
  private hostElement!: HTMLElement;

  //parentNode
  //childNodes

  createTooltip() {
    console.log('showtooltip :', this.hostElement.childNodes);

    // creating div

    this.tooltipElement = this.renderer.createElement('div');

    // creating the content of the div

    const tooltipContent = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, tooltipContent);
    this.renderer.appendChild(this.hostElement, this.tooltipElement);

    // setting the style of host element to position relative

    this.renderer.setStyle(this.hostElement, 'position', 'relative');

    // setting the style of tooltip element

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '9999');
    this.renderer.setStyle(this.tooltipElement, 'background-color', '#555');
    this.renderer.setStyle(this.tooltipElement, 'color', '#f3f3f3');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'cursor', 'default');

    // adding the tooltip class to tooltip element in order to set after animation for making it's arrow

    this.renderer.addClass(this.tooltipElement, 'tooltip');

    this.positionTooltip();
  }

  positionTooltip() {
    // getting the rect object for the tooltip element

    this.tooltipElementPosition = this.tooltipElement.getBoundingClientRect();

    // defining the left and top

    let top, left;

    switch (this.placement) {
      case 'top':
        top = -(this.tooltipElementPosition.height + this.offset);
        left =
          (this.hostElementPosition.width - this.tooltipElementPosition.width) /
          2;

        this.renderer.addClass(this.tooltipElement, 'top');

        break;

      case 'bottom':
        top = this.hostElementPosition.height + this.offset;
        left =
          (this.hostElementPosition.width - this.tooltipElementPosition.width) /
          2;

        this.renderer.addClass(this.tooltipElement, 'bottom');

        break;

      case 'left':
        top =
          (this.hostElementPosition.height -
            this.tooltipElementPosition.height) /
          2;
        left = -(this.tooltipElementPosition.width + this.offset);

        this.renderer.addClass(this.tooltipElement, 'left');
        break;

      case 'right':
        top =
          (this.hostElementPosition.height -
            this.tooltipElementPosition.height) /
          2;
        left = this.hostElementPosition.width + this.offset;

        this.renderer.addClass(this.tooltipElement, 'right');
        break;
    }

    // setting the top and left to the tooltip element

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// first trial

// @Input('appTooltip') tooltipTitle: string = '';
// @Input() placement?: string;
// @Input() delay?: number;
// tooltip?: HTMLElement;
// offset = 10;
// constructor(private el: ElementRef) {}
// @HostListener('mouseenter') onMouseEnter() {
//   if (!this.tooltip) {
//     this.show();
//   }
// }
// @HostListener('mouseleave') onMouseLeave() {
//   if (this.tooltip) {
//     this.hide();
//   }
// }
// show() {
//   this.create();
//   this.setPosition();
//   this.tooltip?.classList.add('tooltip-show');
// }
// hide() {
//   this.tooltip?.classList.remove('tooltip-show');
//   this.tooltip?.remove();
//   this.tooltip = undefined;
// }
// create() {
//   this.tooltip = document.createElement('span');
//   this.tooltip.classList.add('tooltip');
//   this.tooltip.textContent = this.tooltipTitle;
//   document.body.appendChild(this.tooltip);
// }
// setPosition() {
//   const this.hostElementPosition = this.el.nativeElement.getBoundingClientRect();
//   const this.tooltipElementPosition = this.tooltip?.getBoundingClientRect();
//   if (!this.tooltipElementPosition) return;
//   let top, left;
//   switch (this.placement) {
//     case 'top':
//       top = this.hostElementPosition.top - this.tooltipElementPosition.height - this.offset;
//       left = this.hostElementPosition.left + (this.hostElementPosition.width - this.tooltipElementPosition.width) / 2;
//       break;
//     case 'bottom':
//       top = this.hostElementPosition.bottom + this.offset;
//       left = this.hostElementPosition.left + (this.hostElementPosition.width - this.tooltipElementPosition.width) / 2;
//       break;
//     case 'right':
//       top = this.hostElementPosition.top + (this.hostElementPosition.height - this.tooltipElementPosition.height) / 2;
//       left = this.hostElementPosition.right + this.offset;
//       break;
//     case 'left':
//       top = this.hostElementPosition.top + (this.hostElementPosition.height - this.tooltipElementPosition.height) / 2;
//       left = this.hostElementPosition.left - this.tooltipElementPosition.width - this.offset;
//       break;
//     default:
//       throw new Error('invalid placement value' + this.placement);
//   }
//   if (this.tooltip) {
//     this.tooltip.style.top = `${top}px`;
//     this.tooltip.style.left = `${left}px`;
//   }
// }

// // second trial
// @Input('appTooltip') tooltipText!: string;
// @Input() placement!: 'top' | 'left' | 'right' | 'bottom';
// private tooltipElement!: HTMLElement;
// constructor(private el: ElementRef, private renderer: Renderer2) {}
// @HostListener('mouseenter')
// onMouseEnter(): void {
//   this.showTooltip();
// }
// @HostListener('mouseleave')
// onMouseLeave(): void {
//   this.hideTooltip();
// }
// private showTooltip(): void {
//   if (!this.tooltipElement) {
//     this.createTooltipElement();
//   }
//   this.renderer.addClass(this.tooltipElement, 'tooltip-show');
// }
// private hideTooltip(): void {
//   if (this.tooltipElement) {
//     this.renderer.removeClass(this.tooltipElement, 'tooltip-show');
//   }
// }
// private createTooltipElement(): void {
//   this.tooltipElement = this.renderer.createElement('div');
//   const text = this.renderer.createText(this.tooltipText);
//   this.renderer.appendChild(this.tooltipElement, text);
//   this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
//   this.renderer.addClass(this.tooltipElement, 'tooltip');
//   this.renderer.addClass(this.tooltipElement, `tooltip-${this.placement}`);
// }

// third trial
// positionTooltip() {
//   this.tooltipElementPosition = this.tooltipElement.getBoundingClientRect();
//   console.log(this.tooltipElementPosition);
//   let top = this.tooltipElementPosition.top;
//   let left = this.tooltipElementPosition.left;
//   switch (this.placement) {
//     case 'top':
//       top =
//         this.hostElementPosition.top -
//         this.tooltipElementPosition.height -
//         this.offset;
//       left =
//         this.hostElementPosition.left +
//         (this.hostElementPosition.width - this.tooltipElementPosition.width) /
//           2;
//       break;
//     case 'bottom':
//       top = this.hostElementPosition.bottom + this.offset;
//       left =
//         this.hostElementPosition.left +
//         (this.hostElementPosition.width - this.tooltipElementPosition.width) /
//           2;
//       break;
//     case 'right':
//       top =
//         this.hostElementPosition.top +
//         (this.hostElementPosition.height -
//           this.tooltipElementPosition.height) /
//           2;
//       left = this.hostElementPosition.right + this.offset;
//       break;
//     case 'left':
//       top =
//         this.hostElementPosition.top +
//         (this.hostElementPosition.height -
//           this.tooltipElementPosition.height) /
//           2;
//       left =
//         this.hostElementPosition.left -
//         this.tooltipElementPosition.width -
//         this.offset;
//       break;
//     default:
//       throw new Error('invalid placement value' + this.placement);
//   }
//   this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
//   this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
//   console.log(this.tooltipElementPosition);
//   console.log(this.tooltipElement.style.top);
// }
