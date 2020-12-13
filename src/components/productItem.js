import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../CartContext';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  width: 278px;
  height: 320px;
  padding: 0px 12px;
  margin-bottom: 32px;
`;

const CoverImage = styled.img`
  width: 278px;
  height: 209px;
  border-radius: 5px;
`;

const ClassName = styled.div`
  display: flex;

  .title {
    font-size: 1rem;
    display: -webkit-box;
    height: 2.5em;

    &.clamp {
      font-size: 1rem;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
`;

const AddCart = styled.button`
  width: 100%;
  background-color: #e67e22;
  padding: 0.8em; 0;
  color: white;
  border: 0;
  border-radius: 2px;
  margin-top: 10px;
`;

function ProductItem({ product }) {
    const {cartList, setCartList} = useContext(CartContext);
    const addItemToCart = () => {
      const cartListClone = [...cartList]
      const idx = cartListClone.findIndex(cartItem => cartItem.product.id === product.id)
      if (idx > -1) {
        cartListClone[idx].quantity += 1
        setCartList(cartListClone)
      }
      else {
        setCartList(cartListClone.concat({
          quantity: 1,
          product
        }))
      }
    };
    return (
      <Card>
        <CoverImage src={product.coverImage} alt={product.title}/>
        <ClassName>
          <h1 className="title clamp">{product.title}</h1>
          {/* <button><FontAwesomeIcon icon={faCaretDown}/></button> */}
        </ClassName>
        <div>
          월&nbsp;
          <strong>
            {product.price.toLocaleString()}
          </strong>
        </div>
        <AddCart onClick={addItemToCart}>장바구니에 담기</AddCart>
      </Card>
    );
  }

export default ProductItem;