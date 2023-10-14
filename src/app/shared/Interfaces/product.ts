import { IComment } from './comment';

export interface IProducts {
  id: number;
  category: string;
  title: string;
  price: number;
  colors: string[];
  sizes: string[];
  description: string;
  images: undefined | string[] | number[];
  comments: undefined | IComment[];
}
