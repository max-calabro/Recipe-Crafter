import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const NewRecipe = (props) => {
  const initialState = {
    name: ``,
    description: ``,
    ingredients: ``,
    instructions: ``
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    //console.log(formState)
    event.preventDefault()
    let res = await axios.post(`http://localhost:3001/recipes/addNew`, formState)
    //console.log(res.data)
    setFormState(formState)
    //what should the user see when the recipe is edited

  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <Link to="/recipes">Back To All Recipes</Link>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="editRecipe">Edit Recipe</label>
        
        <label htmlFor="name">Recipe Name</label>
        <input 
          onChange={handleChange}
          placeholder='Name...'
          value={formState.name} 
          type="text" 
          id="name"
        />

        <label htmlFor="description">Recipe Description</label>
        <textarea 
          onChange={handleChange}
          placeholder='Description...'
          value={formState.description} 
          id="description" 
          cole="30" 
          rows="10"
        ></textarea>

        <label htmlFor="ingredients">Recipe Ingredients</label>
        <textarea
          onChange={handleChange}
          placeholder='Ingredient 1, Ingredient 2, ...'
          value={formState.ingredients}
          id="ingredients" 
          cole="30" 
          rows="10"
        ></textarea>

        <label htmlFor="instructions">Recipe Instructions</label>
        <textarea 
          onChange={handleChange}
          placeholder='Instructions...'
          value={formState.instructions}
          id="instructions" 
          cole="30" 
          rows="10"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewRecipe