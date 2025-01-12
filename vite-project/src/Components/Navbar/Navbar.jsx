import React from 'react';
import './Navbar.css';
import { BiCartAdd, BiUser } from 'react-icons/bi';

const Navbar = () => {
  window.addEventListener('scroll', function() {
    const navebar = document.querySelector('.navbar')
    navebar.classList.toggle('active', window.scrollY > 100)
  });
  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <h2>DLKFURNITURE</h2>
        </div>
        <div className="link">
          <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="#"></a>Shop</li>
            <li> <a href="#"></a>About</li>
            <li> <a href="#"></a>Contact</li>
          </ul>
        </div>
        <div className="nav_icon">
          <BiCartAdd className='icon cart'/>
          <BiUser className='icon'/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
