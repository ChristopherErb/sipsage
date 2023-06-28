import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Contact from './components/Contact';
import DrinkDetails from './components/DrinkDetails';
import Drinks from './components/Drinks';
import Meals from './components/Meals'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkDetails />} />
        <Route path="/Meals/" element={<Meals /> } />"
      </Routes>
    </Router>
  );
};

export default App;
