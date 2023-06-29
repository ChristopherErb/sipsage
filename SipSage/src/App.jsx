import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Contact from './components/Contact';
import DrinkDetails from './components/DrinkDetails';
import Drinks from './components/Drinks';
import Meals from './components/Meals'
import MealsDetails from './components/MealsDetails'

const App = () => {
  const navStyle = {
    background: '#7A542E',
    padding: '10px',
    fontWeight: 'bold',
    backdropFilter: 'blur(5px)',   
    backgroundColor: 'rgba(0, 0, 0, 0.5)',   
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px 20px',
  };

  return (
    <Router>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/main" style={linkStyle}>Menu</Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkDetails />} />
        <Route path="/meals/" element={<Meals /> } />"
        <Route path="/meals/:id" element={<MealsDetails /> } />"
      </Routes>
    </Router>
  );
};

export default App;
