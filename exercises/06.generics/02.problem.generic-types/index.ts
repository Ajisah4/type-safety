// Generic Types and Interfaces

// 🐨 Create a LoadingState<Data> discriminated union with four exclusive states:
// - idle (no payload)
// - loading (no payload)
// - success (includes data of type Data)
// - error (includes an error string)

// 🐨 Create a function `createSuccess` that takes data and returns a success
// LoadingState carrying that data

// 🐨 Create a function `createError` that takes an error message and returns an
// error LoadingState carrying that message
// 💰 Keep a Data type parameter even though error states have no data field

// type User = { id: number; name: string }
// const userState = createSuccess({ id: 1, name: 'Ada' })
// console.log(userState)
// const errorState = createError<User>('Failed to load user')
// console.log(errorState)

// 🐨 Export `createSuccess` and `createError`. Tests import these by name.
// export { createSuccess, createError }
