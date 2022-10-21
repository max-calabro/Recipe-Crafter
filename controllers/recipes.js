const Recipe = require('../models/recipe')

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json(recipe)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRecipes = async (req, res) => {
  try {
    const all = await Recipe.find({})
    //return res.send(`http.cat/${res.status(200)}`)
    return res.status(200).json(all)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createRecipe,
  getAllRecipes
}
