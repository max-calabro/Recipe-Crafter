import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Ingredients from './pages/Ingredients'
import RecipeDetails from './pages/RecipeDetails'
import { useState } from 'react'
import EditRecipe from './pages/EditRecipe'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const selectRecipe = (recipe) => {
    console.log(recipe)
    setSelectedRecipe(recipe)
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
          path="/recipes/:id/*"
          element={<RecipeDetails selectedRecipe={selectedRecipe} />}
        />
        <Route path="/recipes/:id/form" element={<EditRecipe />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </div>
  )
}

export default App
