const express = require('express')
const recipeRoutes = require('./routes/recipes')
const ingredientRoutes = require('./routes/ingredients')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
//require() imports and middleware above ^

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
// app.use() middleware above ^

app.use('/recipes', recipeRoutes)
app.use('/ingredients', ingredientRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))
