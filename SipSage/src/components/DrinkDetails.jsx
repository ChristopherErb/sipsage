import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DrinkPage = () => {
  const [drink, setDrink] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getDrink = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setDrink(response.data.drinks[0]);
        console.log(response);
      } catch (error) {
        console.error('Error fetching drink:', error);
      }
    };

    getDrink();
  }, [id]);

  const drinkDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    backdropFilter: 'blur(5px)',
  };

  const drinkTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: 'white',
  };

  const drinkImageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const drinkInfoStyle = {
    fontSize: '16px',
    color: 'white',
    marginBottom: '10px',
  };

  const backButtonStyle = {
    textDecoration: 'none', 
    color: 'white',
  };

  return drink ? (
    <div className="drinkDetailsPage" style={drinkDetailsStyle}>
      <h2 style={drinkTitleStyle}>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} style={drinkImageStyle} />
      <h3 style={drinkInfoStyle}>{drink.strTags}</h3>
      <h3 style={drinkInfoStyle}>{drink.strCategory}</h3>
      {Object.entries(drink).map(([key, value]) => {
        if (key.includes('strIngredient') && value) {
          const measureKey = `strMeasure${key.slice(-1)}`;
          return (
            <h5 key={key} style={drinkInfoStyle}>
              {drink[measureKey]} of {value}
            </h5>
          );
        }
        return null;
      })}
      <h3 style={drinkInfoStyle}>{drink.strInstructions}</h3>
      <button>
        <Link to="/drinks" style={backButtonStyle}>Back to drinks</Link>
      </button>
    </div>
  ) : (
    <h3>Making drink...</h3>
  );
};

export default DrinkPage;
