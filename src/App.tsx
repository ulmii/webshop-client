import React from 'react';
import './App.css';
import {Products} from './components/Products';
import {ShopContextProvider} from './contexts/ShopContext';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <div>
        <ShopContextProvider>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </ShopContextProvider>
      </div>
    </div>
  );
}

export default App;
