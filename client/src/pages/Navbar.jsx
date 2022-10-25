import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar_items" to="/">Home</Link>
      <Link className="navbar_items" to="/recipes">Recipes</Link>
      <Link className="navbar_items" to="/ingredients">Ingredients</Link>
    </div>
  )
}

export default Navbar