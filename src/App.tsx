import React from 'react';
import './App.css';
import {Products} from './components/Products';
import {ShopContextProvider} from './contexts/ShopContext';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SSORedirect from './components/SSORedirect';
import Checkout from './components/Checkout';
import {Basket} from './components/Basket';

function App() {
  return (
    <div className="App">
      <div>
        <ShopContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/sso">
            <SSORedirect />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </ShopContextProvider>
      </div>
    </div>
  );
}

export default App;
