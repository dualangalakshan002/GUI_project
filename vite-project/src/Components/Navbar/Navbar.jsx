import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the navigation hook
import './Navbar.css';
import { BiCartAdd, BiLogIn, BiUser } from 'react-icons/bi';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('active', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <h2>DLK_FURNITURE</h2>
        </div>
        <div className="link">
          <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/shop">Shop</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="/contact">Contact</a> </li>
            
          </ul>
        </div>
        <div className="nav_icon">
          <BiCartAdd className="icon cart" />
          <BiUser className="icon" />
          <BiLogIn
            className="icon login"
            onClick={() => navigate('/login')} // Navigate to the login page
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
