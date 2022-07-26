const router = require('express').Router({ mergeParams: true })
const controller = require('./products.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.list).all(methodNotAllowed)
// router.route('/:productId').get(controller.read).all(methodNotAllowed)
router.route('/:productId([0-9]+)').get(controller.read).all(methodNotAllowed) // Added validation to the route to ensure one or two digits are only passed

module.exports = router
