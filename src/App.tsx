import React from 'react';
import './App.css';
import {Products} from './components/Products';
import {ShopContextProvider} from './contexts/ShopContext';
import MenuAppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <div>
        <ShopContextProvider>
          <Products />
        </ShopContextProvider>
      </div>
    </div>
  );
}

export default App;
