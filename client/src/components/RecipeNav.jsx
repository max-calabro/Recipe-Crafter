import { Link } from "react-router-dom"

const RecipeNav = () => {
  return (
    <div className="RecipeNav">
      <Link to="/createRecipe">New Recipe</Link>
    </div>
  )
}

export default RecipeNav