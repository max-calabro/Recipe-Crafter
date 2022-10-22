import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Ingredients from './pages/Ingredients'
import RecipeDetails from './pages/RecipeDetails'
//import axios from 'axios'
//import Server from '/'
import { useState } from 'react'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const selectRecipe = (recipeId) => {
    console.log(recipeId)
    setSelectedRecipe(recipeId)
  }

  return (
    <div>
      <Navbar />
      <h1>Recipe Crafter</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipes/*"
          element={
            <Recipes
              recipes={recipes}
              setRecipes={setRecipes}
              selectRecipe={selectRecipe}
              selectedRecipe={selectedRecipe}
            />
          }
        />
        <Route
          path="/recipes/:id"
          element={<RecipeDetails selectedRecipe={selectedRecipe} />}
        />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </div>
  )
}

export default App
