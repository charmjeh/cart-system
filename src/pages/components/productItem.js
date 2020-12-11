import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  width: 278px;
  height: 387px;
  padding: 0px 12px;
  margin-bottom: 32px;
`
const CoverImage = styled.img`
  width: 278px;
  height: 209px;
  border-radius: 5px;
`

function ProductItem(props) {
    return (
      <div>
        <Card>
          <CoverImage src={props.product.coverImage} />
          <b>{props.product.title}</b>
          <div>
            월&nbsp;
            <strong>
              {props.product.price.toLocaleString()}
            </strong>
          </div>
        </Card>
      </div>
    );
  }

export default ProductItem;