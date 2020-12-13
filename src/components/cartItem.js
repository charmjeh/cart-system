import React, { useContext } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & > img,
  & > div,
  & > strong,
  & > button {
    margin-right: 20px;
  }
`

const CoverImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

const CartItemInfo = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
    
  h2 {
    text-align: left;
    margin: 0px;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  strong {
    font-size: 1rem;
    color: #555
  }
`;

function CartItem({ cartItem: {product, quantity} }) {
    return (
      <CardContainer>
        <CoverImage src={product.coverImage} alt={product.title}/>
        <CartItemInfo>
          <h2>{product.title}</h2>
          <strong>{product.price}원</strong>
        </CartItemInfo>
        <strong>{quantity}개</strong>
        <button>삭제</button>
      </CardContainer>
    );
  }

export default CartItem;