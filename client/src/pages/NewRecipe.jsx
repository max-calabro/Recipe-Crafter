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
    // check if ingredients exsits

    // for the ones that do get their id's

    //  for the ones that don't create new ingredients

    //  save all the ingredients._id's in an array to feed to create new recipe

    //
    // create new recipe
    //
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
    <div className="new_and_edit">
      <h1>Edit Recipe</h1>
      <Link className="navbar_items" to="/recipes">Back To All Recipes</Link>
      <form 
        onSubmit={handleSubmit}
        className="form"
      >
        
        <label className="navbar_items" htmlFor="name">Recipe Name</label>
        <input 
          onChange={handleChange}
          placeholder='Name...'
          value={formState.name} 
          type="text" 
          id="name"
        />

        <label className="navbar_items" htmlFor="description">Recipe Description</label>
        <textarea 
          onChange={handleChange}
          placeholder='Description...'
          value={formState.description} 
          id="description" 
          cole="30" 
          rows="10"
        ></textarea>

        <div>
          <label className="navbar_items" htmlFor="ingredients">Recipe Ingredients</label>
          <input
            onChange={handleChange}
            placeholder='Ingredient 1'
            value={formState.ingredients}
            id="ingredients" 
            cole="30" 
            rows="10"
          ></input>
          <label className="navbar_items" htmlFor="ingredient_type">Ingredient Type</label>
          <select
            // onChange={}
            // value={}
            id="ingredientType"
          >
            <option>Select Ingredient Type</option>
            <option value="outage">Protein</option>
            <option value="billing">Veg</option>
            <option value="cancel">Carb</option>
          </select>
        </div>
        <label className="navbar_items" htmlFor="instructions">Recipe Instructions</label>
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