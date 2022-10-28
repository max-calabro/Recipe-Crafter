import { Link } from "react-router-dom"

const RecipeNav = () => {
  return (
    <div className="RecipeNav">
      <Link className="navbar_items" to="/createRecipe">Create A New Recipe</Link>
    </div>
  )
}

export default RecipeNav