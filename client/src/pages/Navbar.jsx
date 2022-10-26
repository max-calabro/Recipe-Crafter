import { useNavigate } from "react-router-dom"


const Navbar = (props) => {
  let navigate = useNavigate()

  const callChangeBackground = (endpoint, className) => {
    props.changeBackground(className)
    navigate(endpoint)
  }
  return (
    <div className="navbar">

      {/* <Link className="navbar_items" to="/">Home</Link> */}
      <button className="navbar_items" onClick={() => callChangeBackground('/', 'home_wrapper')}>Home</button>
      <button className="navbar_items" onClick={() => callChangeBackground('/recipes', 'recipes_wrapper')}>Recipes</button>
      <button className="navbar_items" onClick={() => callChangeBackground('/ingredients', 'ingredients_wrapper')}>Ingredients</button>

      {/* <Link className="navbar_items" to="/recipes">Recipes</Link>
      <Link className="navbar_items" to="/ingredients">Ingredients</Link> */}
    </div>
  )
}

export default Navbar