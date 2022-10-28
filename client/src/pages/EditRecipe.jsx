import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EditRecipe = (props) => {
  const navigate = useNavigate()
  const arrayOfNames = []
  
  // useEffect(() => {
  //   const mapNames = () => {
  //     props.ingredientNames.map((ingredient, index) => {
  //       arrayOfNames.push(ingredient[index].name)
  //     })
  //   }
  //   mapNames()
  // }, [])

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

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const deleteRecipe = async () => {
    let toDelete = await axios.delete(`http://localhost:3001/recipes/${props.selectedRecipe._id}/delete`)
    console.log("deleted")
    //navigate(-2)
    //what should the user see when the recipe is deleted
    //screen with two buttons: "new Recipe" "All recipes" ?
  }

  const handleRemoveIngredient = (index) => {
  //   const list = [...ingredientList]
  //   list.splice(index, 1)
  //   setIngredientList(list)
    //const list = [...ingredientList]
    const list = [...props.ingredientNames]
    list.splice(index, 1)
    // let toDelete = await axois.put(`http://localhost:3001/recipes/${the-specific-id}/removeIngredientFromRecipe`)
    //setIngredientList(list)
    props.setIngredientNames(list)
  }

  const handleAddIngredient = () => {
    //console.log(props.selectedRecipe.ingredients)
    //setIngredientList([...ingredientList, {ingredient:''}])
    props.setIngredientNames([...props.ingredientNames, ""])
  }

  return (
    <div className="new_and_edit">
      <h1>Edit Recipe</h1>
      <Link className="navbar_items" to="/recipes">Back To All Recipes</Link>
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
        {formState.ingredients.map((name, index) => 
        //props.ingredientNames.map ingredientList
          <div key={index}>
            <div>
              <input
                onChange={handleChange}
                value={name.name}
                id="ingredients" 
              ></input>
              {props.ingredientNames.length > 1 && <button type="button" onClick={() => handleRemoveIngredient(index)} >Remove Ingredient</button>}
            {/* props.ingredientNames.length  ingredientList*/}
            </div>
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
  )
}

export default EditRecipe