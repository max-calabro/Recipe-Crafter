import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import DisplayIngredients from "../components/DisplayIngredients"
import { useEffect } from "react"
// import axios from "axios"

const RecipeDetails = (props) => {
  let navigate = useNavigate()


  const editRecipe = () => {
    navigate(`edit`)
  }

// hsould get rid of this eventually
  useEffect(() => {
    props.getIngredietnsById(props.selectedRecipe)

  }, [])


  return (
      <div className="details">
        <h1>{props.selectedRecipe.name}</h1>
        <Link className="navbar_items" to="/recipes">Back To All Recipes</Link>
        <div className="recipe_page">
          <div className="recipe_description_ingredients">
            <p className="recipe_description">{props.selectedRecipe.description}</p>
            <DisplayIngredients selectedRecipe={props.selectedRecipe}  /> 
            
          </div>
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