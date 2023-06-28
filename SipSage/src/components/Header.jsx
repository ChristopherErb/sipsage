import React from 'react';
import Nav from './Nav';

function Header() {
  const headingStyle = {
    fontSize: '36px',
    color: 'white',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: '20px',
    backdropFilter: 'blur(5px)',   
    backgroundColor: 'rgba(0, 0, 0, 0.5)',   
  };

  return (
    <header>
      <h1 style={headingStyle}>SipSage</h1>
      <Nav />
    </header>
  );
}

export default Header;
