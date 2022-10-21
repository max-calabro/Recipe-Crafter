const { Router } = require('express')
const controllers = require('../controllers/recipes')
const router = Router()

router.get('/', controllers.getAllRecipes)

router.post('/new', controllers.createRecipe)

module.exports = router
