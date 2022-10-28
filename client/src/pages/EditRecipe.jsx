import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EditRecipe = (props) => {
  const navigate = useNavigate()

  const initialState = {
    name: `${props.selectedRecipe.name}`,
    description: `${props.selectedRecipe.description}`,
    ingredients: props.selectedRecipe.ingredients,
    instructions: `${props.selectedRecipe.instructions}`
  }
  //props.ingredientNames
  const [formState, setFormState] = useState(initialState)
  //const [ingredientList, setIngredientList] = useState([...props.ingredientNames])
  //console.log(formState.ingredients)

  const handleSubmit = async (event) => {
    //console.log(formState)
    event.preventDefault()
    // for(let i=0;i<props.ingredientNames.length;i++) {
    //   let newIngredient = await axios.post(`http://localhost:3001/ingredients/addNew`, {"name": `${event.target[i*3+2].value}`, "type": `k`})
    // }
    let res = await axios.put(`http://localhost:3001/recipes/${props.selectedRecipe._id}/edit`, formState)
    //navigate(`http://localhost:3001/recipes/${props.selectedRecipe._id}`)
    //console.log(res.data._id)
    navigate(`/recipes/${res.data._id}`)
    //what should the user see when the recipe is edited

  }

  const handleChange = (event, index) => {
    console.log(event.target)
    console.log(formState.ingredients)
    // console.log(formState.description)
    // console.log(formState.ingredients)
    // console.log(formState.ingredients[0].name)
    if(event.target.id === "ingredient_name") {
      setFormState({...formState, [formState.ingredients[index].name]: event.target.value})
    } else if (event.target.id === "ingredient_type") {
      setFormState({...formState, [formState.ingredients[index].type]: event.target.value})
    } else {
      setFormState({ ...formState, [event.target.id]: event.target.value })
    }
  }

  const deleteRecipe = async () => {
    let toDelete = await axios.delete(`http://localhost:3001/recipes/${props.selectedRecipe._id}/delete`)
    navigate('/recipes')
    //what should the user see when the recipe is deleted
    //screen with two buttons: "new Recipe" "All recipes" ?
  }

  const handleRemoveIngredient = (index) => {
    //const list = [...props.ingredientNames]
    const list = [...formState.ingredients]
    list.splice(index, 1)
    // let toDelete = await axois.put(`http://localhost:3001/recipes/${the-specific-id}/removeIngredientFromRecipe`)
    //setIngredientList(list)
    //props.setIngredientNames(list)
    setFormState(list)
  }

  const handleAddIngredient = () => {
    //console.log(props.selectedRecipe.ingredients)
    //setIngredientList([...ingredientList, {ingredient:''}])
    props.setIngredientNames([...props.ingredientNames, ""])
  }
  
  return (
    <div className="new_and_edit">
      <h1>Edit Recipe</h1>
      <div className="background">
        <Link className="back" to="/recipes">Back To All Recipes</Link>

        <form onSubmit={handleSubmit} className="form">        
          <label className="navbar_items" htmlFor="name">Recipe Name</label>
          <input 
            onChange={handleChange}
            value={formState.name} 
            type="text" 
            id="name"
          />

          <label className="navbar_items" htmlFor="description">Recipe Description</label>
          <textarea 
            onChange={handleChange}
            value={formState.description} 
            id="description" 
            cole="30" 
            rows="10"
          ></textarea>

          <label className="navbar_items" htmlFor="ingredients">Recipe Ingredients</label>
          {formState.ingredients.map((ingredient, index) => 
            <div className="ing_flex" key={index}>
              <div>
                <input
                  onChange={(event) => handleChange(event, index)}
                  value={ingredient.name}
                  id="ingredient_name" 
                ></input>
                {formState.ingredients.length > 1 && <button type="button" onClick={() => handleRemoveIngredient(index)} >Remove Ingredient</button>}
              </div>
              {/* To be added later */}
              {/* <select
                  onChange={handleChange}
                  id="ingredient_type"
                >
                  <option>Select Ingredient Type</option>
                  <option value="Protein">Protein</option>
                  <option value="Veg">Veg</option>
                  <option value="Carb">Carb</option>
                </select> */}
            </div>
          )}
          <button onClick={() => handleAddIngredient()} type="button">Add Ingredient</button>
          

          <label className="navbar_items" htmlFor="instructions">Recipe Instructions</label>
          <textarea 
            onChange={handleChange}
            value={formState.instructions}
            id="instructions" 
            cole="30" 
            rows="10"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        <button onClick={() => deleteRecipe()}>Delete Recipe</button>
      </div>
    </div>
  )
}

export default EditRecipe