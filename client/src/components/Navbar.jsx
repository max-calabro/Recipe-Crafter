import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipe</Link>
      <Link to="/ingredients">Ingredient</Link>
    </div>
  )
}

export default Navbar