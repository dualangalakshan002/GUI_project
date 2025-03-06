import React from 'react';
import { product_category_list } from '../../data';

const shope = () => {
  return (
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
  );
}

export default shope;
