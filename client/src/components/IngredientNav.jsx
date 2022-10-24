import { Link } from "react-router-dom"

const IngredientNav = () => {
  return (
    <div className="IngredientNav">
      <h2>IngredientNav</h2>
      <Link className="ingredient_links" to="/ingredients/new">New Ingredient</Link>
      <Link className="ingredient_links" to="/ingredients/edit">Edit Ingredient</Link>
    </div>
  )
}

export default IngredientNav