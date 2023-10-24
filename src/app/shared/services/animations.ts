import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate('1s ease-in-out')]),
]);
