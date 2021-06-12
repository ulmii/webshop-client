import React from 'react';
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
