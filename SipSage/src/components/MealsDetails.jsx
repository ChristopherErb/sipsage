 
import React from 'react';

function MealsDetails(props) {
  // Component code goes here
}

export default MealsDetails;
=======
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const mealPage = () => {
    const [meal, setmeal] = useState('')
    let { id } = useParams()
    useEffect(()=>{
        const getMeal = async() => {
          const response = await axios.get('www.themealdb.com/api/json/v1/1')
          setMeal(response.data.results[id])
          console.log(response)
        }
        getmeal()
      },[])
return meal ? (
    <div className="mealDetailsPage">
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>{meal.strTags}</h3>
        <h3>{meal.strCategory}</h3>
        <h3>{meal.strArea}</h3>
        <h5>{meal.strMeasure1} of {meal.strIngredient1}</h5>
        <h5>{meal.strMeasure2} of {meal.strIngredient2}</h5>
        <h5>{meal.strMeasure3} of {meal.strIngredient3}</h5>
        <h5>{meal.strMeasure4} of {meal.strIngredient4}</h5>
        <h5>{meal.strMeasure5} of {meal.strIngredient5}</h5>
        <h5>{meal.strMeasure6} of {meal.strIngredient6}</h5>
        <h5>{meal.strMeasure7} of {meal.strIngredient7}</h5>
        <h5>{meal.strMeasure7} of {meal.strIngredient8}</h5>
        <h5>{meal.strMeasure9} of {meal.strIngredient9}</h5>
        <h5>{meal.strMeasure10} of {meal.strIngredient10}</h5>
        <h5>{meal.strMeasure11} of {meal.strIngredient11}</h5>
        <h5>{meal.strMeasure12} of {meal.strIngredient12}</h5>
        <h5>{meal.strMeasure13} of {meal.strIngredient13}</h5>
        <h5>{meal.strMeasure14} of {meal.strIngredient14}</h5>
        <h5>{meal.strMeasure15} of {meal.strIngredient15}</h5>
        <h5>{meal.strMeasure16} of {meal.strIngredient16}</h5>
        <h5>{meal.strMeasure17} of {meal.strIngredient17}</h5>
        <h5>{meal.strMeasure18} of {meal.strIngredient18}</h5>
        <h5>{meal.strMeasure19} of {meal.strIngredient19}</h5>
        <h5>{meal.strMeasure20} of {meal.strIngredient20}</h5>
        <h3>{meal.strInstructions}</h3>
        <button><Link to='/meals'>meals</Link></button>
    </div>
) : <h5>Making meal...</h5>
}
export default mealPage
 
