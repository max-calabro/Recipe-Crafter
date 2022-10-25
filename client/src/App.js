import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Recipes from './pages/Recipes'
import Ingredients from './pages/Ingredients'

import RecipeDetails from './pages/RecipeDetails'
import IngredientDetails from './pages/IngredientDetails'

import EditRecipe from './pages/EditRecipe'
import EditIngredient from './pages/EditIngredient'

import NewRecipe from './pages/NewRecipe'
import NewIngredient from './pages/NewIngredient'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [selectedIngredient, setSelectedIngredient] = useState(null)

  const selectRecipe = (recipe) => {
    //console.log(recipe)
    setSelectedRecipe(recipe)
  }

  const selectIngredient = (ingredient) => {
    //console.log(recipe)
    setSelectedIngredient(ingredient)
  }

  return (
    <div className="whole_page">
      <Navbar />
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
          path="/recipes/:id/*"
          element={<RecipeDetails selectedRecipe={selectedRecipe} />}
        />
        <Route
          path="/recipes/:id/edit"
          element={<EditRecipe selectedRecipe={selectedRecipe} />}
        />
        <Route path="/createRecipe" element={<NewRecipe />} />
        <Route
          path="/ingredients/*"
          element={
            <Ingredients
              ingredients={ingredients}
              setIngredients={setIngredients}
              selectIngredient={selectIngredient}
              selectedIngredient={selectedIngredient}
            />
          }
        />
        <Route
          path="/ingredients/:id/*"
          element={
            <IngredientDetails selectedIngredient={selectedIngredient} />
          }
        />
        <Route
          path="/ingredients/:id/edit"
          element={<EditIngredient selectedIngredient={selectedIngredient} />}
        />
        <Route path="/createIngredient" element={<NewIngredient />} />
      </Routes>
    </div>
  )
}

export default App
