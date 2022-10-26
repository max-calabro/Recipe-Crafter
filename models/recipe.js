const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    instructions: { type: String, required: true },
    notes: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
