import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const IngredientDetails = (props) => {
  let navigate = useNavigate()

  const editIngredient = () => {
    navigate(`edit`)
  }

  const deleteIngredient = async () => {
    let toDelete = await axios.delete(`http://localhost:3001/ingredients/${props.selectedIngredient._id}/delete`)
    navigate(`http://localhost:3001/ingredients`)
  }

  //console.log(props)

  return (
    <div className="details">
      <Link className="navbar_items" to="/ingredients">Back to all ingredients</Link>
      <div className="navbar_items">name: {props.selectedIngredient.name}</div>
      <div className="navbar_items">type: {props.selectedIngredient.type}</div>
      <button onClick={() => editIngredient()}>Edit Ingredient </button>
      <button onClick={() => deleteIngredient()}>delete Ingredient </button>
    </div>
  )
}

export default IngredientDetails