import React, { useContext, useEffect, useState } from 'react';
import { BiCart, BiUser } from 'react-icons/bi';
import './Navbar.css';
import { ShopContext } from '../ShopContext/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isTransparent }) => {
  const { itemAmount } = useContext(ShopContext);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Remove email from storage
    setUserEmail(""); // Reset state
    navigate("/login"); // Redirect to login page
  };

  const navbarStyle = {
    backgroundColor: isTransparent ? 'transparent' : '#000',
    color: '#fff',
  };

  return (
    <div>
      <div className="navbar" style={navbarStyle}>
        <div>
          <img className="logoImg" src="https://dynamic.design.com/asset/logo/b06b7dd6-0ee4-4286-b575-9150215f648d/logo-search-grid-1x?logoTemplateVersion=1&v=638315761709000000&text=Keerthi+Furniture" />
        </div>
        <div className="logo">
          <h2>Keerthi_Furniture</h2>
        </div>
        <div className="link">
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="nav_icon_wrapper">
          <Link to='/cart'>
            <div className="nav_cart">
              <BiCart className='nav_icon' />
              <p className="nav_cart_amount">{itemAmount}</p>
            </div>
          </Link>
          <BiUser className='nav_icon' />

          {userEmail ? (
            <>
              <span className="user-email">{userEmail}</span>
              <div className="nav_login" onClick={handleLogout} style={{ cursor: "pointer" }}>
                <h3>Logout</h3>
              </div>
            </>
          ) : (
            <Link to='/login'>
              <div className="nav_login">
                <h3>Login</h3>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
