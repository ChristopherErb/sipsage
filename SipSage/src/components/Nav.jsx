import React from 'react';

function Nav() {
  const navStyle = {
    background: '#7A542E',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)',  // Apply backdrop blur effect
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Add a semi-transparent background color
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    
    
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    
    
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><a href="/Meals" style={linkStyle}>Food</a></li>
        <li><a href="/Drinks" style={linkStyle}>Drinks</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
