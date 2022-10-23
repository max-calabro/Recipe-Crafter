import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const RecipeDetails = (props) => {
  let navigate = useNavigate()

  const editRecipe = () => {
    navigate(`form`)
  }

  //console.log(props)

  return (
    <div>
      <Link to="/recipes">Back</Link>
      <br></br>
      {props.selectedRecipe.name}
      <br></br>
      {props.selectedRecipe.description}
      <br></br>
      {props.selectedRecipe.ingredients}
      <br></br>
      {props.selectedRecipe.instructions}
      <br></br>
      <button onClick={() => editRecipe()}>Edit Recipe </button>
    </div>
  )
}

export default RecipeDetails