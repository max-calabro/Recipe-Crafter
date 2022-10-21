import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import IngredientList from "../components/IngredientList"

const Ingredients = () => {

  const [ingredients, setIngredients] = useState([])


  useEffect(() => {
    const getIngredients = async () => {
      const response = await axios.get('http://localhost:3001/ingredients')
      //console.log(response.data)
      setIngredients(response.data)
    }
    getIngredients()
  }, [])

  return (
    <div className="recipes_ingredients">
      <h2>Ingredients</h2>
      <Link className="ingredient_links" to="/ingredients/new">New Ingredient</Link>
      <Link className="ingredient_links" to="/ingredients/edit">Edit Ingredient</Link>
      <div>
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  )
}

export default Ingredients