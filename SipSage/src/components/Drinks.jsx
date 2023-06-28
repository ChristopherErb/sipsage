 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Drinks = () => {
  const [drinks, setDrinks] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        setDrinks(response.data.drinks);
        console.log(response);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    getDrinks();
  }, []);

  const showDrinks = (drink) => {
    navigate(`${drink.idDrink}`);
  };

  return drinks ? (
    <div className="drinksListPage">
      <h2>List of drinks</h2>
      {drinks.map((drink) => (
        <div className="drinkCard" onClick={() => showDrinks(drink)} key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
      ))}
    </div>
  ) : (
    <h3>Getting thirsty...</h3>
  );
};

export default Drinks;

 
