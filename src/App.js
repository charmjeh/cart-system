import React from 'react';
import { Route, Link } from 'react-router-dom';
import Products from './pages/products';
import Cart from './pages/cart';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">상품 목록</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

export default App;