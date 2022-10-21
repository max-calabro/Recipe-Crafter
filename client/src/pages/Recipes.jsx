import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import RecipeList from "../components/RecipeList"

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get('http://localhost:3001/recipes')
      //console.log(response.data)
      setRecipes(response.data)
    }
    getRecipes()
  }, [])

  return (
    <div className="recipes_ingredients" >
      <h2>Recipes</h2>
      <Link className="recipe_links" to="/recipes/new">New Recipe</Link>
      <Link className="recipe_links" to="/recipes/edit">Edit Recipe</Link>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  )
}

export default Recipes