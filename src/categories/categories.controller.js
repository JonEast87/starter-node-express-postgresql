const categoriesService = require('./categories.service') // requires the service object that was created assigns it ot the variable categoriesService

async function list(req, res, next) {
	categoriesService
		.list() // calls the list method from the .service.js file
		.then((data) => res.json({ data })) // chains them to an async function to execute the Knex query
		.catch(next) // chaining next will pass any errors on if the listing of data fails
}

module.exports = {
	list: [list],
}
