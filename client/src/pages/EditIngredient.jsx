
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EditIngredient = (props) => {
  const navigate = useNavigate()

  const initialState = {
    name: `${props.selectedIngredient.name}`,
    type: `${props.selectedIngredient.type}`
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    //console.log(formState)
    event.preventDefault()
    let res = await axios.put(`http://localhost:3001/ingredients/${props.selectedIngredient._id}/edit`, formState)
    //console.log(res.data)
    setFormState(formState)
    navigate(`/ingredients/${props.selectedIngredient._id}`)
    //what should the user see when the recipe is edited

  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const deleteIngredient = async () => {
    console.log(props.selectedIngredient._id)
    let toDelete = await axios.delete(`http://localhost:3001/ingredients/${props.selectedIngredient._id}/delete`)
    console.log("deleted")
    navigate("/ingredients")
    //what should the user see when the recipe is deleted
    //screen with two buttons: "new Recipe" "All recipes" ?
  }

  return (
    <div className="new_and_edit">
      <h1>Edit Ingredient</h1>
      <Link className="back" to="/ingredients">Back To All Ingredients</Link>
      <form onSubmit={handleSubmit}>        
        <label className="navbar_items" htmlFor="name">Ingredient Name</label>
        <input 
          onChange={handleChange}
          value={formState.name} 
          type="text" 
          id="name"
        />

        <label className="navbar_items" htmlFor="type">Ingredient Type</label>
        <select
                  onChange={handleChange}
                  id="type"
                >
                  <option>Select Ingredient Type</option>
                  <option value="Grain">Grain</option>
                  <option value="Vegetable">Vegetable</option>
                  <option value="Fruit">Fruit</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Protein">Protein</option>
                  <option value="Spice">Spice</option>
                  <option value="Legumes">Legumes</option>
                  <option value="Oil">Oil</option>
                  <option value="Beverage">Beverage</option>
                  <option value="Other">Other</option>
                </select>

        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={() => deleteIngredient()}>Delete Ingredient</button> */}
    </div>
  )
}

export default EditIngredient