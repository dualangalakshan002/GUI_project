import React from 'react';
import './ProductList.css';
import { ProductContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const ProductList = ({ category }) => {
  const { products } = React.useContext(ProductContext);

  return (
    <div>
      <div className="product" id="shop">
        <div className="product_items">
          {products.map((product) => {
            if (category === 'All' || category === product.category) {
              return (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Product product={product} />
                </Link>
              );
            }
            return null; // Safely handle cases where the condition isn't met.
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
