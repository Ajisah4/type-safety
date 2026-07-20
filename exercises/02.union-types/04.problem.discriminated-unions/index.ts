// Discriminated Unions Pattern

// 🐨 Replace ApiState with a discriminated union on `status`.
// Valid exclusive variants:
// - loading (no data/error fields)
// - success (includes string-array data)
// - error (includes string error)

type ApiState = {
	status: string
	data: Array<string>
	error: string
}

// console.log(renderState(/* a loading ApiState */))
// console.log(renderState(/* a success ApiState with data */))
// console.log(renderState(/* an error ApiState */))

function renderState(state: ApiState): string {
	switch (state.status) {
		case 'loading':
			return 'Loading...'
		case 'success':
			return `Loaded ${state.data.length} items`
		case 'error':
			return `Error: ${state.error}`
		default: {
			// @ts-expect-error - 💣 remove this comment when ApiState is discriminated
			const _exhaustive: never = state
			return _exhaustive
		}
	}
}

// 🐨 Replace PaymentMethod with a discriminated union on `type`.
// Valid exclusive variants:
// - credit card (last4 + expiry strings)
// - PayPal (email string)
// - bank transfer (accountNumber string)

type PaymentMethod = {
	type: string
	last4: string
	expiry: string
	email: string
	accountNumber: string
}

// console.log(describePayment(/* a credit card PaymentMethod */))
// console.log(describePayment(/* a PayPal PaymentMethod */))
// console.log(describePayment(/* a bank PaymentMethod */))

function describePayment(method: PaymentMethod): string {
	switch (method.type) {
		case 'credit_card':
			return `Card ending in ${method.last4} (exp: ${method.expiry})`
		case 'paypal':
			return `PayPal: ${method.email}`
		case 'bank':
			return `Bank account: ${method.accountNumber}`
		default: {
			// @ts-expect-error - 💣 remove this comment when PaymentMethod is discriminated
			const _exhaustive: never = method
			return _exhaustive
		}
	}
}

// 🐨 Export `renderState` and `describePayment`. Tests import these by name and
// check the output for each union variant.
// export { renderState, describePayment }
