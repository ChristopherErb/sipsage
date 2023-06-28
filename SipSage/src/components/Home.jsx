import React from 'react';

function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    backdropFilter: 'blur(5px)',  // Apply backdrop blur effect
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Add a semi-transparent background color
    color: 'white',
    padding: '20px',
    
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    
  };

  const paragraphStyle = {
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome to SipSage!</h2>
      <p style={paragraphStyle}>Find delicious food and drink combinations.</p>
    </div>
  );
}

export default Home;
