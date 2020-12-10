import Product from './components/productItem';
import { productItems } from '../productItems';



const Products = () => {
  return (
    <div>
      {productItems.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;