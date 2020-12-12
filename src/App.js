import React, { useState, useMemo } from 'react';
import { Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { CartContext } from './CartContext';
import Header from './components/Header';
import Products from './pages/products';
import Cart from './pages/cart';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Container = styled.div`
  padding:  1em 9.6rem;

  @media (max-width: 600px) {
    & {
      padding: 0 1em;
      margin: 0 auto;
    }
  }
`;

const App = () => {
  const [cart, setCart] = useState([])
  const value = useMemo(() => ({ cart, setCart }), [cart, setCart])

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <CartContext.Provider value={value}>
        <Route path="/" exact={true} component={Products} />
        <Route path="/cart" component={Cart} />
      </CartContext.Provider>
    </Container>
  );
};

export default App;