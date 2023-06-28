import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Meals = () => {
const [meal, setMeal] = useState(null)
useEffect(()=> {
    const getmeal = async () => {
    const response = await axios.get('www.themealdb.com/api/json/v1/1')
    setMeal(response.data.results)
    console.log(response)
    console.log(meal)
    }
    getmeal()
}, [])
let navigate = useNavigate()
const showMeal = (meal) => {
    navigate(`${meal.idMeal}`)
}
    return meal ? (
        <div className="mealListPage">
            <h2>List of meals</h2>
            {
                meal.map((meal) => (
                    <div className="mealCard" onClick={() => showMeal(drink)} key={drink.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                ))
            }
        </div>
    ) : (<h3>Getting hungry... </h3>)
}
export default Meals
