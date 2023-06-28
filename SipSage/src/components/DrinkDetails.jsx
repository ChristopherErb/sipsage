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
        <h2>Name:{drink.name}</h2>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <h3>{drink.strTags}</h3>
        <h3>{drink.strCategory}</h3>
        <h3>{drink.strInstructions}</h3>
        <h3>{drink.strIngredient1}</h3>
        <h3>{drink.strIngredient2}</h3>
        <h3>{drink.strIngredient3}</h3>
        <h3>{drink.strIngredient4}</h3>
        <button><Link to='/drinks'>drinks</Link></button>
    </div>
) : <h3>Making drink...</h3>

}

export default drinkPage