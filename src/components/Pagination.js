import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
    display: block;
    margin-top: 2em;
    text-align: center;

    li {
        display: inline;
        border: 1px solid #bdc3c7;
        border-radius: 2px;
        padding: 5px 12px;
        font-weight: 400;
        margin-right: 7px;
        background-color: transparent;
        transition: background-color 0.3s; border-color 0.3s; 
    }
    li:hover {
        background-color: #c0392b;
        border: 1px solid #c0392b;
        color: white;
    }
`

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Navigation>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <a key={number} onClick={() => paginate(number)} className="page-link">
                    <li className="page-item">
                        {number}
                    </li>
                </a>
            ))}
        </ul>
    </Navigation>
  );
};

export default Pagination;