import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <h3 className="footer-title">Keerthi_Furniture</h3>
        <p className="footer-address">
          71, Yatawatta, Matale, Sri Lanka
        </p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p className="copyright">
          Copyright © Keerthi_Furniture2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
