import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  // second trial
  @Input('appTooltip') tooltipText!: string;
  @Input() placement!: 'top' | 'left' | 'right' | 'bottom';
  private tooltipElement!: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.showTooltip();
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hideTooltip();
  }
  private showTooltip(): void {
    if (!this.tooltipElement) {
      this.createTooltipElement();
    }
    this.renderer.addClass(this.tooltipElement, 'tooltip-show');
  }
  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeClass(this.tooltipElement, 'tooltip-show');
    }
  }
  private createTooltipElement(): void {
    this.tooltipElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.addClass(this.tooltipElement, `tooltip-${this.placement}`);
  }
}

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
//   const elementRect = this.el.nativeElement.getBoundingClientRect();
//   const tooltipRect = this.tooltip?.getBoundingClientRect();
//   if (!tooltipRect) return;
//   let top, left;
//   switch (this.placement) {
//     case 'top':
//       top = elementRect.top - tooltipRect.height - this.offset;
//       left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
//       break;
//     case 'bottom':
//       top = elementRect.bottom + this.offset;
//       left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
//       break;
//     case 'right':
//       top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
//       left = elementRect.right + this.offset;
//       break;
//     case 'left':
//       top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
//       left = elementRect.left - tooltipRect.width - this.offset;
//       break;
//     default:
//       throw new Error('invalid placement value' + this.placement);
//   }
//   if (this.tooltip) {
//     this.tooltip.style.top = `${top}px`;
//     this.tooltip.style.left = `${left}px`;
//   }
// }
