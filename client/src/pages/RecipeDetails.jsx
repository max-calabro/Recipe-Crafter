import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import DisplayIngredients from "../components/DisplayIngredients"

const RecipeDetails = (props) => {
  let navigate = useNavigate()

  const editRecipe = () => {
    navigate(`edit`)
  }

  //console.log(props)

  return (
    <div className="ingredients">
      <Link to="/recipes">Back</Link>
      <div className="details">
        <h1>{props.selectedRecipe.name}</h1>
        <div className="recipe_page">
          <div className="recipe_description_ingredients">
            <p className="recipe_description">{props.selectedRecipe.description}</p>
            <DisplayIngredients selectedRecipe={props.selectedRecipe}/>
          </div>
          <p 
          className="recipe_instructions">
            How To Cook:
            <br></br>{props.selectedRecipe.instructions}</p>
          <button onClick={() => editRecipe()}>Edit Recipe </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails