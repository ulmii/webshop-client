type Dispatch<A> = (value: A) => void;

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export type IShopContextState = {
  products: IProduct[];
};
