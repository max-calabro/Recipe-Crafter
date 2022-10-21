const { Router } = require('express')
const controllers = require('../controllers/recipes')
const router = Router()

router.get('/', controllers.getAllRecipes)

router.post('/new', controllers.createRecipe)

router.get('/:id', controllers.getRecipeById)

router.put('/edit/:id', controllers.editRecipe)

router.delete('/delete/:id', controllers.deleteRecipe)

module.exports = router
