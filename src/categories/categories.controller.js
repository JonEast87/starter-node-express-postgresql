const categoriesService = require('./categories.service') // requires the service object that was created assigns it ot the variable categoriesService
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')

async function list(req, res, next) {
	try {
		const data = await categoriesService.list() // calls the list method from the .service.js file via an async function
		res.json({ data })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	list: asyncErrorBoundary(list),
}
