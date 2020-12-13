import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import CartItem from '../components/cartItem';

const Container = styled.div`
  h1 {
    font-size: 1.5rem;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
`;

const Cart = () => {
  const { cartList, setCartList } = useContext(CartContext);

  return (
    <Container>
      <h1>CART</h1>
      {JSON.stringify(cartList)}
    </Container>
  );
};

export default Cart;