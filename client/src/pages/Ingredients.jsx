import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import IngredientNav from "../components/IngredientNav"

const Ingredients = (props) => {
  let navigate = useNavigate()


  const showIngredient = (ingredient) => {
    //console.log(ingredient)
    props.selectIngredient(ingredient)
    navigate(`${ingredient._id}`)
  }

  useEffect(() => {
    const getIngredients = async () => {
      const response = await axios.get('http://localhost:3001/ingredients')
      console.log(response.data)
      props.setIngredients(response.data)
    }
    getIngredients()
  }, [])

  return (
    <div className="recipes_ingredients">
      <IngredientNav />
      <h2>Ingredients</h2>
      <div className="recipe_grid">
      {
        props.ingredients.map((Ingredient) => (
          <div className="Ingredient-card"  key={Ingredient._id}>
            <h3>{Ingredient.name}</h3>
            <button onClick={() => showIngredient(Ingredient)}>View Ingredient </button>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Ingredients