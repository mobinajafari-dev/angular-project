export interface IContent {
  title: string;
  imageURL: string;
  content: string;
  status: 'right' | 'left' | 'icon';
  widthImage: string | undefined;
}
