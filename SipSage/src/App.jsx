import { useState } from 'react'
import './App.css'
// import Header from './components/Header'
// import Main from './components/Main'
import Contact from './components/Contact'
// import DrinkDetails from './components/DrinkDetails'
// import Drinks from './components/Drinks'
// import Home from './components/Home'
// import Meals from './components/Meals'
// import MealsDetails from './components/MealsDetails'

function App() {
 

  return (
  <div className='app'>
    <header>
    {/* <Header /> */}
    </header>
    <main className='appMain'>
    {/* <Main /> */}
    <Contact /> 
    {/* <DrinkDetails />
    <Drinks />
    <Home />
    <Meals />
    <MealsDetails /> */}
    </main>
  </div>
  )
}

export default App
 