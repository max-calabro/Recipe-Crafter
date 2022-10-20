const db = require('../db')
const Recipe = require('../models/recipe')

db.on('error', console.log.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes = [
    {
      name: 'Test One',
      description: 'This is a description',
      ingredients: ['ingre 1', 'ingre 2'],
      instructions: 'These are test instructions'
    },
    {
      name: 'Test two',
      description: 'This is a description for test two',
      ingredients: ['ingre 3', 'ingre 4'],
      instructions: 'These are test instructions again'
    }
  ]

  await Recipe.insertMany(recipes)
  console.log('Created test recipes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
