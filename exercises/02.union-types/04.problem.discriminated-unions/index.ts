// Discriminated Unions Pattern

// Replace ApiState with a discriminated union on `status`

type ApiState =
  | { status: 'loading' }
  | { status: 'success'; data: Array<string> }
  | { status: 'error'; error: string }

// Render API state
function renderState(state: ApiState): string {
  switch (state.status) {
    case 'loading':
      return 'Loading...'
    case 'success':
      return `Loaded ${state.data.length} items`
    case 'error':
      return `Error: ${state.error}`
    default: {
      const _exhaustive: never = state
      return _exhaustive
    }
  }
}

// Replace PaymentMethod with a discriminated union on `type`

type PaymentMethod =
  | {
      type: 'credit_card'
      last4: string
      expiry: string
    }
  | {
      type: 'paypal'
      email: string
    }
  | {
      type: 'bank'
      accountNumber: string
    }

// Describe payment method
function describePayment(method: PaymentMethod): string {
  switch (method.type) {
    case 'credit_card':
      return `Card ending in ${method.last4} (exp: ${method.expiry})`
    case 'paypal':
      return `PayPal: ${method.email}`
    case 'bank':
      return `Bank account: ${method.accountNumber}`
    default: {
      const _exhaustive: never = method
      return _exhaustive
    }
  }
}

// Export functions
export { renderState, describePayment }