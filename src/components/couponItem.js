import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #efefef;

  h2 {
    font-size: 1rem;
  }
  input {
    margin-right: 18px;
  }
`

function CouponItem({ coupon, handleCheckCoupon, index }) {
    return (
      <CardContainer>
        <input
          type="radio"
          name="selectCoupon"
          value={index}
          onClick={handleCheckCoupon}
        />
        <h2>{coupon.title}</h2>
      </CardContainer>
    );
  }

export default CouponItem;