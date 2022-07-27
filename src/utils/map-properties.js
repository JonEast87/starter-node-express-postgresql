const lodash = require('lodash')

/*
  configuration is accepted with an object with the key specifying the property name and value containing it's new name
  mapProperties returns a new function that is useable over and over again to modify multiple data objects
*/

function mapProperties(configuration) {
	return (data) => {
		if (data) {
			return Object.entries(data).reduce((acc, [key, value]) => {
				return lodash.set(acc, configuration[key] || key, value)
			}, {})
		}
		return data
	}
}

module.exports = mapProperties
