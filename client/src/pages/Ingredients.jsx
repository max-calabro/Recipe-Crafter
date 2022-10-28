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
      props.setIngredients(response.data)
    }
    getIngredients()
  }, [])

  return (
    <div className="recipes_ingredients">
      <h1>Ingredients</h1>
      <div className="background">
        <IngredientNav />
        <div className="ingredients_grid">
        {
          props.ingredients.map((Ingredient) => (
            <div className="ingredient_card"  key={Ingredient._id}>
              <h2>{Ingredient.name}</h2>
              <button className="view_button" onClick={() => showIngredient(Ingredient)}>View Ingredient </button>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Ingredients