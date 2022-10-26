import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const NewIngredient = (props) => {
  const initialState = {
    name: ``,
    type: ``
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    //console.log(formState)
    event.preventDefault()
    let res = await axios.post(`http://localhost:3001/ingredients/addNew`, formState)
    //console.log(res.data)
    setFormState(formState)
    //what should the user see when the recipe is edited

  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="new_and_edit">
      <h1>Edit Ingredient</h1>
      <Link className="navbar_items" to="/ingredients">Back To All Ingredients</Link>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="editRecipe">Edit Recipe</label>
        
        <label className="navbar_items" htmlFor="name">Ingredient Name</label>
        <input 
          onChange={handleChange}
          placeholder='Name...'
          value={formState.name} 
          type="text" 
          id="name"
        />

        <label className="navbar_items" htmlFor="type">Ingredient Type</label>
        <input 
          onChange={handleChange}
          placeholder='Type...'
          value={formState.type} 
          type="text" 
          id="type"
        />

          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewIngredient