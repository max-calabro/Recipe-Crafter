import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const RecipeDetails = (props) => {
  let navigate = useNavigate()

  const editRecipe = () => {
    navigate(`edit`)
  }

  //console.log(props)

  return (
    <div class="ingredients">
      <Link to="/recipes">Back</Link>
      <div class="details">
        <h1>{props.selectedRecipe.name}</h1>
        <p className="recipe_description">{props.selectedRecipe.description}</p>
        <div className="recipe_ingredients">
          Ingredients:
          <br></br>
          {props.selectedRecipe.ingredients}</div>
        <p 
        className="recipe_instructions">
          How To Cook:
          <br></br>{props.selectedRecipe.instructions}</p>
        <button onClick={() => editRecipe()}>Edit Recipe </button>
      </div>
    </div>
  )
}

export default RecipeDetails