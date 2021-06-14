export interface IProduct {
  key: string;
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export type IShopContextState = {
  products: IProduct[];
};

export interface IProfile {
  email: string;
}

export interface IBasket {
  userId: string;
  products: IProduct[];
}

export type IBasketContextState = {
  basket: IProduct[];
  setBasket: (basket: IProduct[]) => void;
};
