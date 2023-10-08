export interface IMenu {
  id: number | string;
  items: IItems[];
}

export interface IItems {
  title: string;
  path: string;
}
