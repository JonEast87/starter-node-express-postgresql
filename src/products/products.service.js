const knex = require('../db/connections')

function read(productId) {
	return knex('products').select('*').where({ product_id: productId }).first()
}

function list() {
	return knex('products').select('*')
}

module.exports = {
	list,
	read,
}
