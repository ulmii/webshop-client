import React, {useContext} from 'react';
import {IProduct} from '../interface';
import ShopContext from '../contexts/ShopContext';
import useBasket from '../hooks/useBasket';

export const Products = () => {
  const {products} = useContext(ShopContext);
  const {basket, addProduct, removeProduct} = useBasket();

  return (
    <div>
      <div className="products">
        <ul>
          {products.map((product: IProduct) => (
            <li key={product.id}>
              {product.title}
              <button onClick={() => addProduct(product)}>
                add product to basket
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
