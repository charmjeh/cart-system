import React from 'react';

function ProductItem(props) {
    return (
      <div>
        <b>{props.product.title}</b>
      </div>
    );
  }

export default ProductItem;