import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Drinks from './Drinks';
import DrinkDetails from './DrinkDetails';
import Meals from './Meals';
import MealsDetails from './MealsDetails';
import Contact from './Contact';

const Main = (props) => {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks drinks={props.drinks} />} />
        <Route path="/drinkdetails" element={<DrinkDetails drinkDetails={props.drinkdetails} />} />
        <Route path="/meals" element={<Meals meals={props.meals} />} />
        <Route path="/mealsdetails" element={<MealsDetails mealDetails={props.mealdetails} />} />
        <Route path="/contact" element={<Contact contact={props.contact} />} />
      </Routes>
    </div>
  );
}

export default Main;
