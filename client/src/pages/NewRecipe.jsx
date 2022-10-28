import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NewRecipe = (props) => {
  const navigate = useNavigate()

  const initialState = {
    name: ``,
    description: ``,
    ingredients: [],
    instructions: ``
  }
  const [formState, setFormState] = useState(initialState)
  const [ingredientList, setIngredientList] = useState([{ingredient:''}])
//props.

  const handleSubmit = async (event) => {
    event.preventDefault()
    let arrOfIngredientIds = []
    for(let i=0;i<ingredientList.length; i++){
      let res = await axios.post(`http://localhost:3001/ingredients/addNew`, {"name": `${event.target[i*3+2].value}`, "type": `to be added later`})
      let currentIngredient = await axios.get(`http://localhost:3001/ingredients/${event.target[i*3+2].value}/find`)
      arrOfIngredientIds.push(currentIngredient.data[0]._id)
    }

    setFormState(formState.ingredients = arrOfIngredientIds)

    let res = await axios.post(`http://localhost:3001/recipes/addNew`, formState)
    setFormState(initialState)
    setIngredientList([{ingredient:''}])
    //navigate(`/recipes/${res.data._id}`)
    //what should the user see when the recipe is edited

  }

  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, {ingredient:''}])
  }

  const handleRemoveIngredient = (index) => {
    const list = [...ingredientList]
    list.splice(index, 1)
    setIngredientList(list)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleChangeIngredient = (event, index) => {
    let tempState = [...ingredientList]
    tempState[index].ingredient = event.target.value
    
    
    // tempState.ingredients.push({ingredient: event.target.value})
    // setFormState(tempState)
    setIngredientList(tempState)
  }
  

  return (
    <div className="new_and_edit">
      <h1>New Recipe</h1>
      <div className="background">
        <Link className="back" to="/recipes">Back To All Recipes</Link>
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

          <div className="inline_flex">
            <label className="navbar_items" htmlFor="ingredients">Recipe Ingredients</label>
            <label className="navbar_items" htmlFor="ingredient_type">Ingredient Type</label>
          </div>
          
          {
            ingredientList.map((oneIngredient, index) => (
              <div className="ing_flex" key={index}>
                <input onChange={(event) => handleChangeIngredient(event, index)} placeholder='Ingredient...' value={oneIngredient.ingredient} id="ingredients" cole="30" rows="10"></input>
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
    </div>
  )
}

export default NewRecipe