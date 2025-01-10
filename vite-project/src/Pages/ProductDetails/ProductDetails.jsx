import React from 'react';
import './ProductDetails.css';

import {product_list} from '../../data';
import { useParams } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoStar, IoStarHalf } from 'react-icons/io5';
const ProductDetails = () => {
  //get the product id
  const {id} = useParams();

  //get product based on id
  const product = product_list.find((product) => {
    return product.id === parseInt(id)});
  return (
    <div>
        <div className="product_details">
          <div className="details_top">
            <div className="details_left">
              <img src={product.image} alt="product-img" />
            </div>
            <div className="details_right">
              <h2 className="name">{product.name}</h2>
              <hr />
              <p>{product.productDetail.description}</p>
              <h2 className="price"> Price : Rs{product.price}</h2>
              <p className="shipping"><FaShippingFast className='truck'/><span>Free Shipping & Returns :</span>{product.productDetail.shipping}</p>
              <p className="delivery"><CiDeliveryTruck className='truck'/><span>Estimated Delivery :</span>{product.productDetail.delivery}</p>
              <div className="star-icons">
                <IoStar className='star_icon'/>
                <IoStar className='star_icon'/>
                <IoStar className='star_icon'/>
                <IoStar className='star_icon'/>
                <IoStarHalf className='star_icon'/>
              </div>
              <div className="btn">
                <button>ADD TO CART</button>
                <button>BUY NOW</button>
              </div>
            </div> 
          </div>
          <div className="product_description">
            <h2>Product Details</h2>
            <hr />
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
          </div>
        </div> 
    </div>
  );
}

export default ProductDetails;
