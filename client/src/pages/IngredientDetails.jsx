import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const IngredientDetails = (props) => {
  let navigate = useNavigate()

  const editIngredient = () => {
    navigate(`edit`)
  }

  //console.log(props)

  return (
    <div>
      <Link to="/ingredients">Back</Link>
      <br></br>
      {props.selectedIngredient.name}
      <br></br>
      {props.selectedIngredient.type}
      <br></br>
      <button onClick={() => editIngredient()}>Edit Ingredient </button>
    </div>
  )
}

export default IngredientDetails