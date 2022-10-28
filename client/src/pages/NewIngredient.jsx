import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const NewIngredient = (props) => {
  const navigate = useNavigate()
  const initialState = {
    name: ``,
    type: `k`
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    console.log(formState)
    event.preventDefault()
    let res = await axios.post(`http://localhost:3001/ingredients/addNew`, formState)
    //console.log(res.data)
    //setFormState(formState)
    //what should the user see when the recipe is edited
    navigate(`/ingredients`)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="new_and_edit">
      <h1>New Ingredient</h1>
      <Link className="navbar_items" to="/ingredients">Back To All Ingredients</Link>
      <form className="form" onSubmit={handleSubmit}>        
        <label className="navbar_items" htmlFor="name">Ingredient Name</label>
        <input 
          onChange={handleChange}
          placeholder='Name...'
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
          <option value="Protein">Protein</option>
          <option value="Veg">Veg</option>
          <option value="Carb">Carb</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewIngredient