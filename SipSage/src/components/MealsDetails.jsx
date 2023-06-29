import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MealPage = () => {
  const [meal, setMeal] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(response.data.meals[0]);
        console.log(response);
      } catch (error) {
        console.error('Error fetching meal:', error);
      }
    };

    getMeal();
  }, [id]);

  const styles = {
    mealDetailsPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '5px',
      backdropFilter: 'blur(5px)',
    },
    heading: {
      fontSize: '24px',
    marginBottom: '10px',
    color: 'white',
    },
    image: {
      width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '10px',
    },
    tag: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    instruction: {
      marginBottom: '1rem',
    },
    button: {
      textDecoration: 'none', 
    color: 'white',
    },
  };

  return meal ? (
    <div style={styles.mealDetailsPage}>
      <h2 style={styles.heading}>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={styles.image} />
      <p style={styles.instruction}>{meal.strInstructions}</p>
      <h3 style={styles.tag}>{meal.strTags}</h3>
      <h3 style={styles.tag}>{meal.strCategory}</h3>
      <h3 style={styles.tag}>{meal.strArea}</h3>
      {[...Array(20)].map((_, index) => {
        const ingredient = meal[`strIngredient${index + 1}`];
        const measure = meal[`strMeasure${index + 1}`];
        if (ingredient) {
          return (
            <h5 key={index}>
              {measure} of {ingredient}
            </h5>
          );
        }
        return null;
      })}
      
      <button style={styles.button}>
        <Link to="/meals">Meals</Link>
      </button>
    </div>
  ) : (
    <h5>Loading meal...</h5>
  );
};

export default MealPage;
