import React from 'react';
import './App.css';
import {Products} from './components/Products';
import {ShopContextProvider} from './contexts/ShopContext';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <div>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/products">
          <ShopContextProvider>
            <Products />
          </ShopContextProvider>
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
      </div>
    </div>
  );
}

export default App;
