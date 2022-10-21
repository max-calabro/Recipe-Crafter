const { Router } = require('express')
const controllers = require('../controllers/ingredients')
const router = Router()

router.get('/', controllers.getAllIngredients)

router.post('/new', controllers.createIngredient)

module.exports = router
