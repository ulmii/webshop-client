import React from 'react';
import './App.css';
import {Products} from './components/Products';
import {ShopContextProvider} from './contexts/ShopContext';
import {Route} from 'react-router-dom';
import Welcome from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SSORedirect from './components/SSORedirect';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ShopContextProvider>
            <Products />
          </ShopContextProvider>
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
      </div>
    </div>
  );
}

export default App;
