import React from 'react';
import './Product.css';

const Product = ({product}) => {
  const {image, name, price} = product;
  return (
    <div>
      <div className="item">
        <img src={image} alt="product-img" />
        <div className="product_info">
          <h4>{name}</h4>
          <p>Rs.{price}</p>
          <button>Shop</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
