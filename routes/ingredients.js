const { Router } = require('express')
const controllers = require('../controllers/ingredients')
const router = Router()

router.get('/', controllers.getAllIngredients)

router.post('/new', controllers.createIngredient)

router.get('/:id', controllers.getIngredientById)

//router.put('/edit', controllers.editIngredient)

module.exports = router
