import { Link } from "react-router-dom"

const IngredientNav = () => {
  return (
    <div className="IngredientNav">
      <h2>IngredientNav</h2>
      <Link to="/createIngredient">New Ingredient</Link>
    </div>
  )
}

export default IngredientNav