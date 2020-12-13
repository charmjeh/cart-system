import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import CartItem from '../components/cartItem';
import { coupons } from '../coupons.js';

const CartContainer = styled.div`
  & {
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

const Cart = () => {
  const {cartList} = useContext(CartContext);
  console.log(coupons) 
  return (
    <CartContainer>
      <h1>CART</h1>
      <h3><strong>상품 목록</strong></h3>
      <hr/>
      <div>
        {cartList.map((cartItem, idx) => <CartItem key={idx} cartItem={cartItem} />)}
      </div>
      <h3><strong>총 가격</strong></h3>
      <hr/>
      {cartList.reduce((prev, next)=>{
        return prev + (next.quantity * next.product.price);
      }, 0)}원
    </CartContainer>
  );
};

export default Cart;