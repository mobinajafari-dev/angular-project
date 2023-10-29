export interface IProduct {
  id: number | undefined;
  title: string | undefined;
  image: string | undefined;
  price: number | undefined;
  category: string | undefined;
  description: string | undefined;
  rating: IRating;
}

export interface IRating {
  rate: number | undefined;
  count: number | undefined;
}
