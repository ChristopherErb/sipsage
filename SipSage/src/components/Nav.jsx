
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/meals">Food</Link>
        </li>
        
        <li>
          <Link to="/contact">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
