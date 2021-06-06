type Dispatch<A> = (value: A) => void;

export interface IProduct {
  id: number;
  title: string;
}

export type IShopContextState = {
  products: IProduct[];
};
