import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/ingredients">Ingredients</Link>
    </div>
  )
}

export default Navbar