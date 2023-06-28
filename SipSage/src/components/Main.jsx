import { Route, Routes } from 'react-router-dom'
import Nav from '.Nav'

const Main = () => {
    return (
       <div className="main">
            <Header />
            <Routes>
                <Route path="/" element = { <Home /> } />
                <Route path="drinks" element = { <Drinks drinks={ props.drinks}/> } />
                <Route path="drinkdetails" element = { <DrinkDetails drinkDetails = {props.drinkdetails} /> } />
                <Route path="meals" element = { <Meals meals ={props.meals}/>}/>
                <Route path="mealdetails" element = { <MealDetails mealdetails ={props.mealdetails}/> }/>
                <Route path="contact" element = { <Contact contact={props.contact}/>}/>
            </Routes>


       </div>

    )

}

export default Main