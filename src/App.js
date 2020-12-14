import React, { useState, useMemo } from 'react';
import { Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { CartContext } from './CartContext';
import Header from './components/Header';
import Products from './pages/products';
import Cart from './pages/cart';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }
`;

const Container = styled.div`
  padding:  1em 9.3rem;

  @media (max-width: 600px) {
    & {
      padding: 0 1em;
      margin: 0 auto;
    }
  }
`;
const cartListFromLocalStarage = JSON.parse(localStorage.getItem('cartList') || '[]')
const App = () => {
  const [cartList, setCartList] = useState(cartListFromLocalStarage)
  const value = useMemo(() => ({ cartList, setCartList }), [cartList, setCartList])

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [cartList]);

  return (
    <Container>
      <GlobalStyle />
      <CartContext.Provider value={value}>
        <Header />
        <Route path="/" exact={true} component={Products} />
        <Route path="/cart" component={Cart} />
      </CartContext.Provider>
    </Container>
  );
};

export default App;