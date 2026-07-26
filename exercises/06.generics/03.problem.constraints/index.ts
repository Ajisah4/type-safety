// Generic Constraints

// Create a function getId that takes an object with id: string
function getId<T extends { id: string }>(obj: T): string {
  return obj.id
}

// Create a function getProperty using keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// Create a function merge that combines two objects
// Second object's values overwrite matching keys
function merge<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  return {
    ...first,
    ...second,
  }
}

// Test examples
// const user = { id: '1', name: 'Alice', email: 'alice@example.com' }
// console.log(getId(user)) // '1'
// console.log(getProperty(user, 'email')) // 'alice@example.com'

// console.log(
//   merge(
//     { name: 'Alice', age: 25 },
//     { age: 30, role: 'admin' }
//   )
// )

// Export functions
export { getId, getProperty, merge }