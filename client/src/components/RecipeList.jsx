const RecipeList = (props) => {
  return (
    <div>
      {
        props.recipes.map((recipe) => (
          <div key={recipe._id}>
            <h3>{recipe.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default RecipeList