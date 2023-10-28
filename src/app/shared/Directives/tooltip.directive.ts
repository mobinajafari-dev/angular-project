import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { IPosition } from '../Interfaces/position';
import { AnimationBuilder, animate, style } from '@angular/animations';

@Directive({
  selector: '[appTooltip]',
})

/**
 * how to use?
 *
 * you need to define appTooltip to your tag in html file
 *
 * you can define these properties :
 *
 * 1- offset : define a margin to your tooltip , by default is 0
 * 2- minWidth : define min width for your tooltip
 * 3- maxWidth : define max width for your tooltip
 * 4- minHeight : define min height for your tooltip
 * 5- maxHeight : define max height for your tooltip
 * 6- placement : define on which direction you wanna put your tooltip ,  by default is bottom
 * 7- placementOffset : define a margin to your corners in showtooltip function , by default is 0
 * 8- duration : a string which define time pending for your animation function (it should be string and define whether is ms or s) , by default is 300ms
 * 8- transition : a string which define transition you wanna add to your animation function , by default is ease-in
 *
 * the tooltip will be shown whenever your hover your element
 * and whenever you leave the element tooltip is gonna be hidden
 * also the element is gonna be delete in your dom , too!
 *
 *
 */
export class TooltipDirective {
  constructor(private renderer: Renderer2, private builder: AnimationBuilder) {}

  /* getting data with input from the host element*/

  /* tooltip content*/
  @Input('appTooltip') tooltipText!: string;

  /* tooltip placement */

  @Input() placement:
    | 'right'
    | 'left'
    | 'bottom'
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom-left'
    | 'bottom-right' = 'bottom';

  /* tooltip offset by default is zero */

  @Input() offset: number = 0;

  /* tooltip min width and height */

  @Input('minWidth') minWidth!: string;
  @Input('minHeight') minHeight!: string;

  /* tooltip max width and height */

  @Input('maxWidth') maxWidth!: string;
  @Input('maxHeight') maxHeight!: string;

  /* a margin for showtooltip function if you wanna set a margin to your corners */

  @Input() placementOffset: number = 0;

  /* duration for your animation function */

  @Input() duration: string = '300ms';
  @Input() transition: string = 'ease-in';

  @HostListener('mouseenter', ['$event.target']) onMouseEnter(event: any) {
    this.hostElement = event;
    this.hostElementPosition = event.getBoundingClientRect();

    if (!this.tooltipElement) {
      this.createTooltip();
    }

    this.renderer.appendChild(this.hostElement, this.tooltipElement);
    this.showTooltip();
    this.positionTooltip();

    this.fadeIn();
  }

  @HostListener('mouseleave', ['$event.target']) onMouseLeave(event: any) {
    this.fadeOut();
    this.hostElement.removeChild(this.tooltipElement);
  }

  /* host and tooltip element position */

  hostElementPosition!: IPosition;
  tooltipElementPosition!: IPosition;

  /* host and tooltip element */

  private tooltipElement!: HTMLElement;
  private hostElement!: HTMLElement;

  /* limited value for the show tooltip function in order to set the placement */

  minX: number = 0 + this.placementOffset;
  minY: number = 0 + this.placementOffset;
  maxX: number = window.innerWidth - this.placementOffset;
  maxY: number = window.innerHeight - this.placementOffset;

  createTooltip() {
    /* creating div */

    this.tooltipElement = this.renderer.createElement('div');

    /* creating the content of the div */

    const tooltipContent = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, tooltipContent);

    /* setting the style of host element to position relative */

    this.renderer.setStyle(this.hostElement, 'position', 'relative');

    /* setting the style of tooltip element */

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '9999');
    this.renderer.setStyle(this.tooltipElement, 'background-color', '#555');
    this.renderer.setStyle(this.tooltipElement, 'color', '#f3f3f3');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'min-width', this.minWidth);
    this.renderer.setStyle(this.tooltipElement, 'max-width', this.maxWidth);
    this.renderer.setStyle(this.tooltipElement, 'min-height', this.minHeight);
    this.renderer.setStyle(this.tooltipElement, 'max-height', this.maxHeight);
    this.renderer.setStyle(this.tooltipElement, 'width', 'auto');
    this.renderer.setStyle(this.tooltipElement, 'height', 'auto');
    this.renderer.setStyle(this.tooltipElement, 'border', '0.01rem solid #555');
  }

  /* this function automatically set the placement */

  showTooltip() {
    if (
      this.hostElementPosition.top <= this.minY &&
      this.hostElementPosition.left <= this.minX
    ) {
      this.placement = 'top-left';
    } else if (
      this.hostElementPosition.right + 1 >= this.maxX &&
      this.hostElementPosition.top <= this.minY
    ) {
      this.placement = 'top-right';
    } else if (
      this.hostElementPosition.bottom + 1 >= this.maxY &&
      this.hostElementPosition.left <= this.minX
    ) {
      this.placement = 'bottom-left';
    } else if (
      this.hostElementPosition.right + 1 >= this.maxX &&
      this.hostElementPosition.bottom + 1 >= this.maxY
    ) {
      this.placement = 'bottom-right';
    } else if (this.hostElementPosition.left <= this.minX) {
      this.placement = 'right';
    } else if (this.hostElementPosition.right + 1 >= this.maxX) {
      this.placement = 'left';
    } else if (this.hostElementPosition.bottom + 1 >= this.maxY) {
      this.placement = 'top';
    }

    return this.placement;
  }

  /* this function is for positioning the placement */

  positionTooltip() {
    /* getting the rect object for the tooltip element */

    this.tooltipElementPosition = this.tooltipElement?.getBoundingClientRect();

    /* defining the left and top */

    let top, left;

    switch (this.placement) {
      case 'top':
        top = -(this.tooltipElementPosition.height + this.offset);
        left =
          (this.hostElementPosition.width - this.tooltipElementPosition.width) /
          2;

        this.renderer.addClass(this.tooltipElement, 'tooltip-top');

        break;

      case 'bottom':
        top = this.hostElementPosition.height + this.offset;
        left =
          (this.hostElementPosition.width - this.tooltipElementPosition.width) /
          2;

        this.renderer.addClass(this.tooltipElement, 'tooltip-bottom');

        break;

      case 'left':
        top =
          (this.hostElementPosition.height -
            this.tooltipElementPosition.height) /
          2;
        left = -(this.tooltipElementPosition.width + this.offset);

        this.renderer.addClass(this.tooltipElement, 'tooltip-left');
        break;

      case 'right':
        top =
          (this.hostElementPosition.height -
            this.tooltipElementPosition.height) /
          2;
        left = this.hostElementPosition.width + this.offset;

        this.renderer.addClass(this.tooltipElement, 'tooltip-right');
        break;
      case 'top-right':
        top = this.hostElementPosition.height - this.offset;
        left = -this.tooltipElementPosition.width - this.offset;
        this.renderer.addClass(this.tooltipElement, 'tooltip-top-right');
        break;
      case 'top-left':
        top = this.hostElementPosition.height + this.offset;
        left = this.hostElementPosition.width + this.offset;
        this.renderer.addClass(this.tooltipElement, 'tooltip-top-left');
        break;
      case 'bottom-left':
        top = -this.tooltipElementPosition.height + this.offset;
        left = this.hostElementPosition.width + this.offset;
        this.renderer.addClass(this.tooltipElement, 'tooltip-bottom-left');
        break;
      case 'bottom-right':
        top = -(this.tooltipElementPosition.height + this.offset);
        left = -(this.tooltipElementPosition.width + this.offset);
        this.renderer.addClass(this.tooltipElement, 'tooltip-bottom-right');
        break;
    }

    /* setting the top and left to the tooltip element */

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }

  /* animation function */

  fadeIn() {
    const animation = this.builder.build([
      style({ opacity: 0 }),
      animate(`${this.duration} ${this.transition}`, style({ opacity: 1 })),
    ]);

    const player = animation.create(this.tooltipElement);
    player.play();
  }

  fadeOut() {
    const animation = this.builder.build([
      style({ opacity: '*' }),
      animate(`${this.duration} ${this.transition}`, style({ opacity: 0 })),
    ]);

    const player = animation.create(this.tooltipElement);
    player.play();
  }
}
