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

const getIngredientById = async (req, res) => {
  try {
    const { id } = req.params
    const ingredient = await Ingredient.findById(id)
    if (ingredient) {
      return res.status(200).json({ ingredient })
    }
    return res.status(404).send(error.message)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(ingredient)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Ingredient.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ingredient deleted')
    }
    throw new Error('Ingredient not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllIngredients,
  createIngredient,
  getIngredientById,
  editIngredient,
  deleteIngredient
}
