import { Link } from "react-router-dom"

const IngredientNav = () => {
  return (
    <div className="IngredientNav">
      <Link className="navbar_items" to="/createIngredient">New Ingredient</Link>
      {/* Have a checkbox system for starting a recipe?
      maybe a recipe 'cart'?
      or maybe just a link to create recipe... */}
    </div>
  )
}

export default IngredientNav