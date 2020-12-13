import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from "../CartContext";

  const HeaderBlock = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap');
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;

    h1 {
        display: inline;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
    }

    ul {
        all: unset;
        
        li {
            all: unset;
            display: inline;
            margin-left: 30px;
        }
        
        a,
        a:hover,
        a:active {
            color: black;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            text-decoration: none;
        }
    }
`;

function Header() {
    const { cartList } = useContext(CartContext)

    return (
    <HeaderBlock>
        <h1>NEW CLASSES</h1>
        <ul>
            <li>
                <Link to="/">PRODUCT LIST</Link>
            </li>
            <li>
                <Link to="/cart">
                    CART 
                    ({cartList.reduce((prev, before) => prev + before.quantity, 0)})
                </Link>
            </li>
        </ul>
    </HeaderBlock>
  );
};

export default Header;