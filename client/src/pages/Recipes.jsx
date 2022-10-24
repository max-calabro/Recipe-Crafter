import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import RecipeNav from "../components/RecipeNav"


const Recipes = (props) => {
  let navigate = useNavigate()

  const showRecipe = (recipe) => {
    props.selectRecipe(recipe)
    navigate(`${recipe._id}`)
  }

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
      <div className="recipe_grid">
      {
        props.recipes.map((recipe) => (
          <div className="recipe-card"  key={recipe._id}>
            <h3>{recipe.name}</h3>
            <button onClick={() => showRecipe(recipe)}>View Recipe </button>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Recipes