import React, {useState} from 'react';
import {IBasketContextState, IProduct} from '../interface';

const defaultValue: IBasketContextState = {
  basket: [],
  setBasket: (basket: IProduct[]) => void {},
};

export const BasketContext = React.createContext(defaultValue);

export const BasketContextProvider: React.FC = ({children}) => {
  const [basket, setBasket] = useState<IProduct[]>([]);

  return (
    <BasketContext.Provider value={{basket, setBasket}}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
