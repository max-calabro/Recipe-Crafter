const DisplayIngredients = (props) => {

  return (
    <div className="recipe_ingredients">
      <div>Ingredients:</div>
      {
        props.ingredientNames.map((ingredient, index) => (
          <div key={index}>
            <h3>{ingredient}</h3> 
          </div>
        ))
      }
      </div>
  )
}

export default DisplayIngredients