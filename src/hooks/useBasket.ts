import {useContext} from 'react';
import {IProduct} from '../interface';
import {updateBasket} from '../api/basket';
import BasketContext from '../contexts/BasketContext';
import _ from 'lodash';

function useBasket() {
  const {basket, setBasket} = useContext(BasketContext);

  function addProduct(product: IProduct) {
    const p = {
      key: _.uniqueId(),
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
    };

    const updatedBasket = [p, ...basket];
    setBasket(updatedBasket);

    console.log(updatedBasket);
    updateBasket({userId: '', products: updatedBasket}).catch(e =>
      console.log(e)
    );
  }

  function initBasket(products: IProduct[]) {
    const newProducts = products.map(product => ({
      key: _.uniqueId(),
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
    }));

    setBasket(newProducts);
  }

  function removeProduct(key: string) {
    const filteredProducts = basket.filter(product => product.key !== key);

    setBasket(filteredProducts);
    updateBasket({userId: '', products: [...filteredProducts]}).catch(e =>
      console.log(e)
    );
  }

  return {
    basket,
    addProduct,
    initBasket,
    removeProduct,
  };
}

export default useBasket;
