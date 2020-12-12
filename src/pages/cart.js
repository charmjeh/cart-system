import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import cartItem from '../components/cartItem';

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
  const { cart, setCart } = useContext(CartContext);

  return (
    <Container>
      <h1>CART</h1>
      {/* <div>{JSON.stringify(cart)}</div> */}
      <cartItem />
    </Container>
  );
};

export default Cart;