// Working with Union Types

// 🐨 Create a type `ID` that can be string or number

// 🐨 Create a function `formatId(id: ID): string`
// - number → prefix with '#' (including 0 → '#0')
// - string → return as-is (including '')

// console.log(formatId(123))      // "#123"
// console.log(formatId('abc'))    // "abc"

// 🐨 Create a type `Result` that can be string (success) or Error (failure)

// 🐨 Create a function `processResult(result: Result): string`
// - string → `Success: ${value}`
// - Error → `Error: ${message}`
// 💰 Narrow before reading Error.message

// console.log(processResult('Done!'))          // "Success: Done!"
// console.log(processResult(new Error('Oops'))) // "Error: Oops"

// 🐨 Export `formatId` and `processResult`. Tests import these by name and
// check the formatted output for both union cases.
// export { formatId, processResult }
