import Product from './components/productItem';
import { productItems } from '../productItems';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em 5em;
  display: flex;
  justify-content: space-between;
  align-content: stretch;
`;

const Products = () => {
  return (
    <Container>
      {productItems.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;