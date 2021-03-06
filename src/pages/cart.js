import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
import CartItem from '../components/cartItem';
// import CouponItem from '../components/couponItem';
import { coupons } from '../coupons.js';

const CartContainer = styled.div`
  & {
    width: 800px;
    margin: 0 auto;
    position: relative;

    h1 {
      font-size: 2rem;
      text-align: center;
    }

    h3 button {
      position: absolute;
      right: 0;
    }

    hr {
      margin-bottom: 0;
    }
  }
`;

const Cart = () => {
  const {cartList, setCartList} = useContext(CartContext);
  const [selectedCouponIdx, setSelectedCouponIdx] = useState(1);

  const handleCheckProduct = (e) => {
    const cartListClone = [...cartList]
    const idx = cartListClone.findIndex(cartItem => cartItem.product.id === e.target.name)
    cartListClone[idx].checked = e.target.checked;
    setCartList(cartListClone)
  }

  const handleRemoveProduct = (id) => {
    setCartList(cartList.filter(cartItem => cartItem.product.id !== id));
  }

  // TODO: 쿠폰 적용
  // const handleCheckCoupon = (e) => {
  //   setSelectedCouponIdx(e.target.value);
  // }

  const ProductSum = () => cartList.reduce((prev, next)=>{
    const acc = next.checked ? (next.quantity * next.product.price) : 0
    return prev + acc;
  }, 0)

  // TODO: 쿠폰 적용
  // const SumByDiscountAmount = () => {
  //   const selectedCoupon = coupons[selectedCouponIdx];
  //   return ProductSum() - selectedCoupon.discountAmount
  // }

  return (
    <CartContainer>
      <h1>CART</h1>
      <h3><strong>상품 목록</strong></h3>
      <hr/>
      <div>
        {
          cartList.map((cartItem, idx) => {
            return <CartItem
              cartItem={cartItem}
              handleCheckProduct={handleCheckProduct}
              handleRemoveProduct={handleRemoveProduct}
              key={idx}
              />
          })
        }
      </div>
      {/* 
      TODO: 쿠폰 사용
      <h3><strong>쿠폰 사용</strong></h3>
      <hr/>
        {
          coupons.map((coupon, idx) => {
            return <CouponItem
              coupon={coupon}
              index={idx}
              handleCheckCoupon={handleCheckCoupon}
              key={idx}
            />
          })
        }
        */}
      <h3><strong>총 가격</strong></h3>
      <hr/>
      <strong><ProductSum />원</strong>
    </CartContainer>
  );
};

export default Cart;