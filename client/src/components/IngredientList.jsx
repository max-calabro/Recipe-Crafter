const IngredientList = (props) => {
  return (
    <div>
      {
        props.ingredients.map((ingredient) => (
          <div key={ingredient._id}>
            <h3>{ingredient.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default IngredientList