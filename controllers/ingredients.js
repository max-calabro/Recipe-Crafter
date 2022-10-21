const Ingredient = require('../models/ingredient')

const getAllIngredients = async (req, res) => {
  try {
    const all = await Ingredient.find({})
    return res.status(200).json(all)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createIngredient = async (req, res) => {
  try {
    const ingredient = await new Ingredient(req.body)
    await ingredient.save()
    return res.status(201).json(ingredient)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllIngredients,
  createIngredient
}
