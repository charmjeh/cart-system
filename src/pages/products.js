import React, { useState, useContext, Fragment } from 'react';
import Product from '../components/productItem';
import Pagination from '../components/Pagination';
import { productItems } from '../productItems';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;

  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

const Products = () => {
  const [products] = useState(productItems)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Fragment>
      <Container>
        {
          currentProducts
            .sort(({ score: previousScore }, { score: currentScore }) => currentScore - previousScore)
            .map(product => <Product key={product.id} product={product} key={product.id} />)
        }
      </Container>
      <Pagination postsPerPage={productsPerPage} totalPosts={products.length} paginate={paginate} />
    </Fragment>
  );
};

export default Products;