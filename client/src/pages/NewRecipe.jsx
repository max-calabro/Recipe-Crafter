import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const NewRecipe = (props) => {
  const initialState = {
    name: ``,
    description: ``,
    ingredients: [],
    instructions: ``
  }
  const [formState, setFormState] = useState(initialState)

  const [ingredientList, setIngredientList] = useState([{ingredient:''}])
  const [ingredientTypeList, setIngredientTypeList] = useState([{type:''}])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let arrOfIngredientIds = []
    for(let i=0;i<ingredientList.length; i++){
      let res = await axios.post(`http://localhost:3001/ingredients/addNew`, {"name": `${event.target[i*3+2].value}`, "type": `k`})
      let currentIngredient = await axios.get(`http://localhost:3001/ingredients/${event.target[i*3+2].value}/find`)
      arrOfIngredientIds.push(currentIngredient.data[0]._id)
    }
    // check if ingredients exsits... maybe later
    // for the ones that do get their id's 

    //  for the ones that don't create new ingredients
    

    //  save all the ingredients._id's in an array to feed to create new recipe
    setFormState(formState.ingredients = arrOfIngredientIds)
    console.log(formState)

    //
    // create new recipe
    //
    //console.log(formState)
    let res = await axios.post(`http://localhost:3001/recipes/addNew`, formState)
    //console.log(res.data)
    setFormState(formState)
    //what should the user see when the recipe is edited

  }

  // add another ingredient(and type) meathed triggered by a button press
  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, {ingredient:''}])
    //conditionally render
    // counter that keeps track of amount of ingredients 
    // if counter is less than 
  }

  const handleRemoveIngredient = (index) => {
    const list = [...ingredientList]
    list.splice(index, 1)
    setIngredientList(list)
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

        <label className="navbar_items" htmlFor="ingredients">Recipe Ingredients</label>
        {
          ingredientList.map((oneIngredient, index) => (
            <div key={index}>
              <input onChange={handleChange} placeholder='Ingredient...' value={ingredientList.oneIngredient} id="ingredients" cole="30" rows="10"></input>
              <label className="navbar_items" htmlFor="ingredient_type">Ingredient Type</label>
              <select
              // onChange={}
                // value={}
                id="ingredientType"
              >
                <option>Select Ingredient Type</option>
                <option value="Protein">Protein</option>
                <option value="Veg">Veg</option>
                <option value="Carb">Carb</option>
              </select>
              {ingredientList.length > 1 && <button type="button" onClick={() => handleRemoveIngredient(index)} >Remove Ingredient</button>}
            </div>
          ))
        }
        <button onClick={() => handleAddIngredient()} type="button">Add Ingredient</button>
        

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