import React from 'react';
import './NavBar.css';
import { BiCart, BiUser } from 'react-icons/bi';

const NavBar = () => {
    return (
      <div>
        <nav className="navebra">
          <div className="navelogo">
            <h2>DLKFurniture</h2>
          </div>
          <div className="link">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="nav_ion">
            <BiCart className='iconcart' />
            <BiUser className='icon '/>
          </div>
        </nav>
      </div>
    );
  };
  

export default NavBar;
