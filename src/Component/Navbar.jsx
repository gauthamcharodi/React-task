import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <a Name="navbar-logo">
          CAR <i className="fas fa-car"></i>
        </a>

        <button type="button" className="navbar-toggler" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a className="nav-link">
              Pending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Accepted
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              AWB Created
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Ready to Ship
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Shipped
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Completed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              Cancelled
            </a>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="avatar">
        
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
