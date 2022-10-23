import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const EditRecipe = (props) => {
  const initialState = {
    name: `${props.selectedRecipe.name}`,
    description: `${props.selectedRecipe.description}`,
    ingredients: `${props.selectedRecipe.ingredients}`,
    instructions: `${props.selectedRecipe.instructions}`
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    console.log(formState)
    event.preventDefault()
    let res = await axios.put(`http://localhost:3001/recipes/${props.selectedRecipe._id}/edit`, formState)
    console.log(res.data)
    setFormState(formState)
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
          value={formState.name} 
          type="text" 
          id="name"
        />

        <label htmlFor="description">Recipe Description</label>
        <textarea 
          onChange={handleChange}
          value={formState.description} 
          id="description" 
          cole="30" 
          rows="10"
        ></textarea>

        <label htmlFor="ingredients">Recipe Ingredients</label>
        <textarea
          onChange={handleChange}
          value={formState.ingredients}
          id="ingredients" 
          cole="30" 
          rows="10"
        ></textarea>

        <label htmlFor="instructions">Recipe Instructions</label>
        <textarea 
          onChange={handleChange}
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

export default EditRecipe