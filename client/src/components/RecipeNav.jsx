import { Link } from "react-router-dom"

const RecipeNav = () => {
  return (
    <div className="RecipeNav">
      <h2>RecipeNav</h2>
      <Link to="/new"> New Recipe </Link>
    </div>
  )
}

export default RecipeNav