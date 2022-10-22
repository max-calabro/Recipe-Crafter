// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import RecipeNav from "../components/RecipeNav"
import NewRecipe from "./NewRecipe"


const Recipes = (props) => {

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get('http://localhost:3001/recipes')
      //console.log(response.data)
      props.setRecipes(response.data)
    }
    getRecipes()
  }, [])

  return (
    <div className="recipes_ingredients" >
      <RecipeNav />
      <h2>Recipes</h2>
      <Routes>
        <Route path="/form" element={<NewRecipe />} />
      </Routes>
      <div className="recipe_grid">
      {
        props.recipes.map((recipe) => (
          <div className="recipe-card"  key={recipe._id}>
            <h3>{recipe.name}</h3>
            <button onClick={() => props.selectRecipe(recipe._id)}>View Recipe </button>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Recipes