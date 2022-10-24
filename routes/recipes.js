const { Router } = require('express')
const controllers = require('../controllers/recipes')
const router = Router()

router.get('/', controllers.getAllRecipes)

router.post('/addNew', controllers.createRecipe)

router.get('/:id', controllers.getRecipeById)

router.put('/:id/edit', controllers.editRecipe)

router.delete('/:id/delete', controllers.deleteRecipe)

router.get('/:name/find', controllers.findRecipe)

module.exports = router
