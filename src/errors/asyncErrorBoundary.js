/* 
  delegate is the async / await handler called by asyncErrorBoundary
  defaultStatus is optional and allows the ability to overrride the passed in status with another
  asyncErrorBoundary returns an Express handler which is call in place of the delegate function
*/

function asyncErrorBoundary(delegate, defaultStatus) {
	return (req, res, next) => {
		Promise.resolve()
			.then(() => delegate(req, res, next)) // delegate is called in the promise chain
			.catch((error = {}) => {
				const { status = defaultStatus, message = error } = error
				next({
					status,
					message,
				})
			})
	}
}

module.exports = asyncErrorBoundary
