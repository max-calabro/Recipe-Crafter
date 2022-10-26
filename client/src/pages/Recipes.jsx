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

  // useEffect(() => {
  //   props.changeBackground("recipes_wrapper")
  // })

  return (
    <div className="recipes_ingredients" >
      <h1>Recipes</h1>
      <RecipeNav />
      <div className="recipes_grid">
      {
        props.recipes.map((recipe) => (
          <div className="recipe_card"  key={recipe._id}>
            <h2>{recipe.name}</h2>
            <button className="view_button" onClick={() => showRecipe(recipe)}>View Recipe </button>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Recipes