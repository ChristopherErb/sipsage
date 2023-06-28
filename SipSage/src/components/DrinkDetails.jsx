import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const drinkPage = () => {
    const [drink, setDrink] = useState('')
    let { id } = useParams()
    useEffect(()=>{
        const getdrink = async() => {
          const response = await axios.get('www.thecocktaildb.com/api/json/v1/1')
          setDrink(response.data.results[id])
          console.log(response)
        }
        getdrink()
      },[])
return drink ? (
    <div className="drinkDetailsPage">
        <h2>{drink.strdrink}</h2>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <h3>{drink.strTags}</h3>
        <h3>{drink.strCategory}</h3>
        <h5>{drink.strMeasure1} of {drink.strIngredient1}</h5>
        <h5>{drink.strMeasure2} of {drink.strIngredient2}</h5>
        <h5>{drink.strMeasure3} of {drink.strIngredient3}</h5>
        <h5>{drink.strMeasure4} of {drink.strIngredient4}</h5>
        <h5>{drink.strMeasure5} of {drink.strIngredient5}</h5>
        <h5>{drink.strMeasure6} of {drink.strIngredient6}</h5>
        <h5>{drink.strMeasure7} of {drink.strIngredient7}</h5>
        <h5>{drink.strMeasure7} of {drink.strIngredient8}</h5>
        <h5>{drink.strMeasure9} of {drink.strIngredient9}</h5>
        <h5>{drink.strMeasure10} of {drink.strIngredient10}</h5>
        <h5>{drink.strMeasure11} of {drink.strIngredient11}</h5>
        <h5>{drink.strMeasure12} of {drink.strIngredient12}</h5>
        <h5>{drink.strMeasure13} of {drink.strIngredient13}</h5>
        <h5>{drink.strMeasure14} of {drink.strIngredient14}</h5>
        <h5>{drink.strMeasure15} of {drink.strIngredient15}</h5>
        <h3>{drink.strInstructions}</h3>
        <button><Link to='/drinks'>drinks</Link></button>
    </div>
) : <h3>Making drink...</h3>
}
export default drinkPage
