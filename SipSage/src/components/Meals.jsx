import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Meals = () => {

const [meals, setMeals] = useState(null)
let navigate = useNavigate()

useEffect(()=> {
    const getmeals = async () => {

    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
    setMeals(response.data.meals)
    console.log(response)
    }
    getmeals()
}, [])



const showMeals = (meal) => {
    navigate(`${meal.idMeal}`)
}
    return meals ? (
        <div className="mealListPage">
            <h2>List of meals</h2>
            {
                meals.map((meal) => (
                    <div className="mealCard" onClick={() => showMeals(meal)} key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                ))
            }
        </div>
    ) : (<h3>Getting hungry... </h3>)
}
export default Meals
 
