import React from 'react';
import './Explore.css';
import { product_category_list } from '../../data';

const Explore = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore_menu">
        <h1>Explore our products</h1>
        <p className="text">
          Your product descriptions can make or break a sale. Check out our product description template
          <br />
          and examples to help grow your sales.
        </p>
        <div className="menu_list">
          {product_category_list.map((item, index) => (
            <div
              onClick={() => setCategory((prev) => (prev === item.product_name ? 'All' : item.product_name))}
              key={index}
              className="menu_list_item"
            >
              <div className={category === item.product_name ? 'active' : ''}>
                <h2>{item.product_icon}</h2>
                <p>{item.product_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Explore;
