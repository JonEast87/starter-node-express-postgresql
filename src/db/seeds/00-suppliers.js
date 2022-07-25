const suppliers = require('../fixtures/suppliers') // requires the suppliers seed data and stores it in the suppliers variable

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	return knex
		.raw('TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE') // this method uses the SQL statement restart indentity to reset the primary key values, cascade ensures that any reference are deleted as well
		.then(function () {
			return knex('suppliers').insert(suppliers) // ensures this will only get executed after the preceding knex.raw() function
		})
}
