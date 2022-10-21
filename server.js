const express = require('express')
const recipeRoutes = require('./routes/recipes')
const db = require('./db')
//require() imports and middleware above ^

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
// app.use() middleware above ^

app.use('/recipes', recipeRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))
