import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  border-bottom: 1px solid #efefef;

  & > img,
  & > div,
  & > strong,
  & > button,
  & > input {
    margin-right: 20px;
  }
`

const CoverImage = styled.img`
  flex: 1;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

const CartItemInfo = styled.div`
  flex: 3;
  width: 430px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
    
  h2 {
    flex: 3;
    text-align: left;
    margin: 0px;
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
  strong {
    flex: 3;
    font-size: 1rem;
    color: #555
  }
  .couponNotAvailable {
    margin-left: 10px;
    font-size: 0.8rem;
    background-color: #ecf0f1;
    color: #999;
    border-radius: 2px;
    padding: 2px 5px;
  }
`;

const RemoveBtn = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 0.9rem;
  border: 0;
`

function CartItem({
  cartItem: {checked, product, quantity},
  handleCheckProduct,
  handleRemoveProduct
}) {
    return (
      <CardContainer>
        <input
          type="checkbox"
          name={product.id}
          value={product.id}
          defaultChecked={checked}
          onClick={handleCheckProduct}
        />
        <CoverImage src={product.coverImage} alt={product.title}/>
        <CartItemInfo>
          <h2>{product.title}</h2>
          <strong>
            {product.price}원
            {
              product.availableCoupon === false &&
                <span className="couponNotAvailable">
                  쿠폰 사용 불가능
                </span>
            }
          </strong>
        </CartItemInfo>
        <strong>{quantity}개</strong>
        <RemoveBtn
          onClick={()=> handleRemoveProduct(product.id)}
        >삭제</RemoveBtn>
      </CardContainer>
    );
  }

export default CartItem;