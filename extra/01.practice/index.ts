// Comprehensive TypeScript Practice
// This file contains challenges covering all concepts from the workshop.
// Work through each section, implementing the types and functions as instructed.

// ============================================================================
// SECTION 1: Type Aliases & Interfaces
// ============================================================================

// 🐨 Create a type alias `UserId` that is a string

// 🐨 Create an interface `BaseEntity` with:
// - id: string
// - createdAt: string
// - updatedAt: string

// 🐨 Create an interface `Address` with:
// - street: string
// - city: string
// - state: string
// - zipCode: string
// - country?: string (optional)

// 🐨 Create an interface `Customer` that extends BaseEntity and adds:
// - name: string
// - email: string
// - address: Address
// - isActive: boolean

// Test Section 1:
// const customer: Customer = {
//   id: '1',
//   createdAt: '2024-01-01',
//   updatedAt: '2024-01-02',
//   name: 'John Doe',
//   email: 'john@example.com',
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA',
//     zipCode: '12345',
//   },
//   isActive: true,
// }
// console.log('Customer:', customer)

// ============================================================================
// SECTION 2: Union & Intersection Types
// ============================================================================

// 🐨 Create a union type `PaymentMethod` that can be:
// - 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer'

// 🐨 Create a type `CardPayment` with:
// - type: 'credit_card' | 'debit_card'
// - cardNumber: string
// - expiryDate: string
// - cvv: string

// 🐨 Create a type `PayPalPayment` with:
// - type: 'paypal'
// - email: string

// 🐨 Create a type `BankPayment` with:
// - type: 'bank_transfer'
// - accountNumber: string
// - routingNumber: string

// 🐨 Create a discriminated union `Payment` that combines all payment methods
// 💰 Use the 'type' property as the discriminator

// 🐨 Create a function `processPayment` that:
// - Takes a Payment
// - Returns a distinct string describing the payment method for each variant
// - Uses type narrowing to handle each variant
// 💰 Switch on the 'type' property; exact wording is up to you

// Test Section 2:
// const cardPayment: Payment = {
//   type: 'credit_card',
//   cardNumber: '1234-5678-9012-3456',
//   expiryDate: '12/25',
//   cvv: '123',
// }
// const paypalPayment: Payment = {
//   type: 'paypal',
//   email: 'user@example.com',
// }
// const bankPayment: Payment = {
//   type: 'bank_transfer',
//   accountNumber: '000123',
//   routingNumber: '123456789',
// }
// console.log('Card payment:', processPayment(cardPayment))
// console.log('PayPal payment:', processPayment(paypalPayment))
// console.log('Bank payment:', processPayment(bankPayment))

// ============================================================================
// SECTION 3: Literal Types & Single Source of Truth
// ============================================================================

// 🐨 Create a const object `orderStatuses` with keys/values:
// pending, processing, shipped, delivered, cancelled (each key maps to the same string)
// 💰 Add `as const` to the object below so the values stay literal types

const orderStatuses = {
	pending: 'pending',
	processing: 'processing',
	shipped: 'shipped',
	delivered: 'delivered',
	cancelled: 'cancelled',
}

// 🐨 Create a type `OrderStatus` from the keys of `orderStatuses`

// 🐨 Create a type `OrderStatusValue` from the values of `orderStatuses`

// 🐨 Create a function `getStatusLabel` that:
// - Takes an OrderStatus
// - Returns the corresponding value from orderStatuses
// 💰 Look up the label on orderStatuses (single source of truth)

// Test Section 3:
// console.log('Pending status:', getStatusLabel('pending'))
// console.log('Shipped status:', getStatusLabel('shipped'))
// console.log('All statuses:', Object.keys(orderStatuses).map((key) => getStatusLabel(key as OrderStatus)))

// ============================================================================
// SECTION 4: Generics & Constraints
// ============================================================================

// 🐨 Create a generic function `getProperty` that:
// - Takes an object and a key that exists on that object
// - Returns the value at that key with the correct type
// 💰 Constrain the key with `keyof` so invalid keys are rejected

// 🐨 Create a generic function `hasProperty` that:
// - Takes an object and a property name
// - Returns true if the object has that property
// 💰 Use the `in` operator for type narrowing

// 🐨 Create a generic function `mergeObjects` that:
// - Takes two objects
// - Returns a merged object combining both (intersection of their types)
// 💰 Constrain both parameters to object-like types

// 🐨 Create a generic function `filterByProperty` that:
// - Takes an array of items, a property key, and a value
// - Returns only items where that property equals the value
// 💰 Constrain the key with `keyof` and type the value from the item

// Test Section 4:
// const testObj = { name: 'Alice', age: 30, active: true }
// console.log('Get property:', getProperty(testObj, 'name'))
// console.log('Has property:', hasProperty(testObj, 'name'))
// console.log('Merge objects:', mergeObjects({ a: 1 }, { b: 2 }))
// const items = [
//   { id: 1, status: 'active' },
//   { id: 2, status: 'inactive' },
//   { id: 3, status: 'active' },
// ]
// console.log('Filter by property:', filterByProperty(items, 'status', 'active'))

// ============================================================================
// SECTION 5: Discriminated Unions & Exhaustive Checking
// ============================================================================

// 🐨 Create a discriminated union `ApiResponse` with three variants:
// - status: 'loading' - no additional properties
// - status: 'success' - with data: T (generic)
// - status: 'error' - with error: string and code?: number (optional)
// 💰 Make it generic: ApiResponse<T>

// 🐨 Create a function `handleApiResponse` that:
// - Takes an ApiResponse<string>
// - Returns a string message
// - Handles all three variants with exhaustive checking
// 💰 Use a switch statement with a default case that assigns to `never`

// 🐨 Create a discriminated union `FormField` with variants:
// - type: 'text' - with value: string, placeholder?: string
// - type: 'number' - with value: number, min?: number, max?: number
// - type: 'checkbox' - with checked: boolean, label: string
// - type: 'select' - with value: string, options: Array<string>

// 🐨 Create a function `getFieldValue` that:
// - Takes a FormField
// - Returns string | number | boolean (the value)
// - Uses type narrowing to extract the correct value property

// Test Section 5:
// const loadingResponse: ApiResponse<string> = { status: 'loading' }
// const successResponse: ApiResponse<string> = { status: 'success', data: 'Hello!' }
// const errorResponse: ApiResponse<string> = { status: 'error', error: 'Failed', code: 500 }
// console.log('Loading:', handleApiResponse(loadingResponse))
// console.log('Success:', handleApiResponse(successResponse))
// console.log('Error:', handleApiResponse(errorResponse))
// const textField: FormField = { type: 'text', value: 'Hello', placeholder: 'Enter text' }
// const numberField: FormField = { type: 'number', value: 42, min: 0, max: 100 }
// const checkboxField: FormField = { type: 'checkbox', checked: true, label: 'Agree' }
// const selectField: FormField = { type: 'select', value: 'option1', options: ['option1', 'option2'] }
// console.log('Text field value:', getFieldValue(textField))
// console.log('Number field value:', getFieldValue(numberField))
// console.log('Checkbox value:', getFieldValue(checkboxField))
// console.log('Select value:', getFieldValue(selectField))

// ============================================================================
// SECTION 6: Any vs Unknown
// ============================================================================

// 🐨 Create a function `safeParseJson` that:
// - Takes an unknown value
// - Returns a plain object or null (not arrays/null from JSON)
// - Uses type guards to safely parse JSON
// 💰 If it's a string, parse it; only return non-null objects

// 🐨 Create a function `isStringArray` that:
// - Takes an unknown value
// - Returns a type guard for Array<string>
// 💰 Confirm it's an array and every element is a string

// Test Section 6:
// console.log('Parse JSON:', safeParseJson('{"name": "Alice"}'))
// console.log('Parse invalid:', safeParseJson('not json'))
// const stringArr = ['a', 'b', 'c']
// const numberArr = [1, 2, 3]
// console.log('Is string array:', isStringArray(stringArr))
// console.log('Is string array (numbers):', isStringArray(numberArr))
// if (isStringArray(stringArr)) {
//   console.log('String array length:', stringArr.length)
// }

// ============================================================================
// SECTION 7: Complex Combinations
// ============================================================================

// 🐨 Create a type `WithMetadata` that adds:
// - metadata: Record<string, unknown>

// 🐨 Create a type `TimedEntity` that combines BaseEntity with:
// - startTime?: string
// - endTime?: string

// 🐨 Create a type `Task` that combines TimedEntity and WithMetadata, plus:
// - title: string
// - description: string
// - priority: 'low' | 'medium' | 'high'
// - assigneeId: string | null

// 🐨 Create a generic function `updateTaskMetadata` that:
// - Takes a Task, a metadata key (string), and a metadata value
// - Returns a new Task with that key set/updated in `metadata`
// 💰 Do not mutate the original task; spread a new metadata object

// Test Section 7:
// const task: Task = {
//   id: '1',
//   createdAt: '2024-01-01',
//   updatedAt: '2024-01-02',
//   startTime: '09:00',
//   endTime: '17:00',
//   metadata: { department: 'Engineering', project: 'Task Manager' },
//   title: 'Build feature',
//   description: 'Implement new feature',
//   priority: 'high',
//   assigneeId: 'user-123',
// }
// console.log('Original task:', task)
// const updatedTask = updateTaskMetadata(task, 'department', 'Product')
// console.log('Updated task:', updatedTask)
