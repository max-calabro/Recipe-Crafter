import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const IngredientDetails = (props) => {
  let navigate = useNavigate()

  const editIngredient = () => {
    navigate(`/ingredients/${props.selectedIngredient._id}/edit`)
  }

  const deleteIngredient = async () => {
    let toDelete = await axios.delete(`http://localhost:3001/ingredients/${props.selectedIngredient._id}/delete`)
    navigate(`/ingredients`)
  }

  //console.log(props)

  return (
    <div className="details">
      <h1>{props.selectedIngredient.name}</h1>
      <Link className="back" to="/ingredients">Back to all ingredients</Link>
      <div className="navbar_items">type: {props.selectedIngredient.type}</div>
      <button onClick={() => editIngredient()}>Edit Ingredient </button>
      {/* <button onClick={() => deleteIngredient()}>delete Ingredient </button> */}
    </div>
  )
}

export default IngredientDetails