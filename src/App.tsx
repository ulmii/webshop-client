import React from 'react';
import './App.css';
import {Products} from './components/Products';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SSORedirect from './components/SSORedirect';
import Checkout from './components/Checkout';
import {BasketContextProvider} from './contexts/BasketContext';

function App() {
  return (
    <div className="App">
      <div>
        <BasketContextProvider>
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
        </BasketContextProvider>
      </div>
    </div>
  );
}

export default App;
