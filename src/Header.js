import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css';
import logo from './assets/logo.png'; // Import your logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Display the logo */}
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">HOME</Link> {/* Navigate to Home */}
        <Link to="/cart" className="nav-link">CART</Link> {/* Navigate to Cart */}
        <Link to="/history" className="nav-link">HISTORY</Link> {/* Navigate to History */}
        <Link to="/order" className="nav-link">ORDER</Link> {/* Navigate to Order */}
        <Link to="/setting" className="nav-link">SETTING</Link> {/* Navigate to Setting */}
        <Link to="/about-us" className="nav-link">ABOUT US</Link> {/* Navigate to About Us */}
      </nav>
      <div className="right-section">
        <input type="text" placeholder="Search..." className="search-input" />
        <i className="fa fa-search"></i>
        <i className="fa fa-envelope"></i>
        <i className="fa fa-bell"></i>
        <i className="fa fa-user"></i>
      </div>
    </header>
  );
};

export default Header;
