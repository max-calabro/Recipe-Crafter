
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const EditIngredient = (props) => {
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
    //what should the user see when the recipe is edited

  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const deleteIngredient = async () => {
    let toDelete = await axios.delete(`http://localhost:3001/ingredients/${props.selectedIngredient._id}/delete`)
    console.log("deleted")
    //what should the user see when the recipe is deleted
    //screen with two buttons: "new Recipe" "All recipes" ?
  }

  return (
    <div>
      <Link to="/ingredients">Back To All Ingredients</Link>
      <h2>Edit Ingredient</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="editIngredient">Edit Ingredient</label>
        
        <label htmlFor="name">Ingredient Name</label>
        <input 
          onChange={handleChange}
          value={formState.name} 
          type="text" 
          id="name"
        />

        <label htmlFor="type">Ingredient Type</label>
        <input 
          onChange={handleChange}
          value={formState.type} 
          id="type" 
          cole="30" 
          rows="10"
        ></input>

        <button type="submit">Submit</button>
      </form>
      <button onClick={() => deleteIngredient()}>Delete Ingredient</button>
    </div>
  )
}

export default EditIngredient