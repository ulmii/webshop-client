import {useContext, useEffect, useState} from 'react';
import {IProduct} from '../interface';
import {updateBasket} from '../api/basket';
import BasketContext from '../contexts/BasketContext';

function useBasket() {
  const {basket, setBasket} = useContext(BasketContext);

  function addProduct(product: IProduct) {
    const updatedBasket = [product, ...basket];
    setBasket(updatedBasket);

    updateBasket({userId: '', products: updatedBasket}).catch(e =>
      console.log(e)
    );
  }

  function removeProduct(id: number) {
    const filteredProducts = basket.filter(product => product.id !== id);

    setBasket(filteredProducts);
    updateBasket({userId: '', products: [...filteredProducts]}).catch(e =>
      console.log(e)
    );
  }

  return {
    basket,
    addProduct,
    removeProduct,
  };
}

export default useBasket;
