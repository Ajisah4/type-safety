// Generic Constraints

// 🐨 Create a function `getId` that:
// - Takes any object type with an `id: string` property
// - Returns the id
// 💰 Constrain the type parameter so only objects with `id: string` are allowed

// 🐨 Create a function `getProperty` that:
// - Takes an object and a key that exists on that object
// - Returns the value at that key with the correct type
// 💰 Constrain the key type parameter with `keyof`

// const user = { id: '1', name: 'Alice', email: 'alice@example.com' }
// console.log(getId(user))                    // '1'
// console.log(getProperty(user, 'email'))     // 'alice@example.com'

// 🐨 Create a function `merge` that:
// - Takes two objects
// - Returns a new object with properties from both
// - If both have the same key, the second object's value wins
// 💰 Constrain both type parameters to object types

// const merged = merge({ a: 1 }, { b: 2 })    // { a: 1, b: 2 }
// console.log(merged)

// 🐨 Export `getId`, `getProperty`, and `merge`. Tests import these
// by name and check inferred types.
// export { getId, getProperty, merge }
