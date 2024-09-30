import React from 'react';
import './Banner.css'; // Import the CSS file for styling
import logo from './assets/logo.png'; // Import your logo

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Left side: Logo */}
        <div className="banner-left">
          <img src={logo} alt="Logo" className="logo-image" />
          <button className="banner-button">PRINT IT NOW</button>
        </div>

        {/* Right side: Placeholder */}
        <div className="banner-right">
          <div className="placeholder">
            <i className="fa fa-image" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Banner;
