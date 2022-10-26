const { Router } = require('express')
const controllers = require('../controllers/ingredients')
const router = Router()

router.get('/', controllers.getAllIngredients)

router.post('/addNew', controllers.createIngredient)

router.get('/:id', controllers.getIngredientById)

router.put('/:id/edit', controllers.editIngredient)

router.delete('/:id/delete', controllers.deleteIngredient)

router.get('/:name/find', controllers.findIngredientByName)

module.exports = router
