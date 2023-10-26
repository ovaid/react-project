
import React, { useState } from 'react';
import '../Styles/Navbar.css'; 

function Navbar() {
  const [showHomeOptions, setShowHomeOptions] = useState(false);
  const [showAboutOptions, setShowAboutOptions] = useState(false);

  // Handle hover events for "Home" and "About Us"
  const handleHomeHover = () => {
    setShowHomeOptions(true);
    setShowAboutOptions(false);
  };

  const handleAboutHover = () => {
    setShowAboutOptions(true);
    setShowHomeOptions(false);
  };

  // Handle mouse leave events to hide the sub-options
  const handleMouseLeave = () => {
    setShowHomeOptions(false);
    setShowAboutOptions(false);
  };

  return (
    <div className="navbar">
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="Logo" className="logo" />
      <ul className="menu">
        <li
          className="menu-item"
          onMouseEnter={handleHomeHover}
          onMouseLeave={handleMouseLeave}
        >
          Home
          {showHomeOptions && (
            <ul className="sub-menu">
              <li>Option 1</li>  
              <li>Option 2</li> 
              <li>Option 3</li>
              <li>Option 1</li>  
              <li>Option 2</li> 
              <li>Option 3</li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onMouseEnter={handleAboutHover}
          onMouseLeave={handleMouseLeave}
        >
          About Us
          {showAboutOptions && (
            <ul className="sub-menu">
              <li>History</li> 
              <li>Team</li> 
              <li>Contact</li>
              <li>Option 1</li>  
              <li>Option 2</li> 
              <li>Option 3</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
