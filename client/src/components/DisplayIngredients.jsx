const DisplayIngredients = (props) => {

  console.log(props.selectedRecipe.ingredients)
  return (
    <div className="recipe_ingredients">
      <div>Ingredients:</div>
      <div>
      {/* {props.selectedRecipe.ingredients} */}
      {
        props.selectedRecipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <h2>{ingredient}</h2>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default DisplayIngredients