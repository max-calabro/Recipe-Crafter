import { Link } from "react-router-dom"

const IngredientNav = () => {
  return (
    <div className="IngredientNav">
      <Link className="navbar_items" to="/createIngredient">New Ingredient</Link>
      <div className="navbar_items">Have a checkbox system for starting a recipe?</div>
      <div className="navbar_items">maybe a recipe 'cart'?</div>
      <div className="navbar_items">or maybe just a link to create recipe...</div>
    </div>
  )
}

export default IngredientNav