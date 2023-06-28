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

  const drinksListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
    maxWidth:'800px',
    
    marginLeft:'100px',
    
  };

  const drinkCardStyle = {
    cursor: 'pointer',
    padding: '10px',
    backdropFilter: 'blur(5px)',   
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    borderRadius: '5px',
    
    textAlign: 'center',
  };

  const drinkTitleStyle = {
    fontSize: '16px',
    marginBottom: '10px',
  };

  return drinks ? (
    <div className="drinksListPage">
      <h2>List of drinks</h2>
      <div style={drinksListStyle}>
        {drinks.map((drink) => (
          <div
            style={drinkCardStyle}
            onClick={() => showDrinks(drink)}
            key={drink.idDrink}
          >
            <h3 style={drinkTitleStyle}>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h3>Getting thirsty...</h3>
  );
};

export default Drinks;
