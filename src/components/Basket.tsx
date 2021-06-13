import React, {useContext} from 'react';
import {IProduct} from '../interface';
import ShopContext from '../contexts/ShopContext';
import useBasket from '../hooks/useBasket';

export type BasketProps = React.ReactHTML;

export const Basket = () => {
  const {products} = useContext(ShopContext);
  const {basket, addProduct, removeProduct} = useBasket();

  return (
    <div>
      <div className="products">
        <ul>
          {products.map((product: IProduct) => (
            <li>
              {product.title}
              <button onClick={() => addProduct(product)}>add product</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="basket">
        <ul>
          {basket.map((product: IProduct) => (
            <li>
              {product.title}
              <button onClick={() => removeProduct(product.id)}>
                remove product
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
