import React, {useContext} from 'react';
import {IProduct} from '../interface';
import ShopContext from '../contexts/ShopContext';
import useBasket from '../hooks/useBasket';
import MenuAppBar from './AppBar';
import Album from './Album';

export const Products = () => {
  const authToken = localStorage.getItem('authToken');

  return (
    <div>
      <MenuAppBar />
      <Album />
    </div>
  );
};
