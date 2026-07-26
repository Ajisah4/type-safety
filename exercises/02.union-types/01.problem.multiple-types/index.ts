// Working with Union Types

// Create a type ID that can be string or number
type ID = string | number

// Create formatId function
function formatId(id: ID): string {
  if (typeof id === 'number') {
    return `#${id}`
  }

  return id
}

// Create a type Result that can be string or Error
type Result = string | Error

// Create processResult function
function processResult(result: Result): string {
  if (typeof result === 'string') {
    return `Success: ${result}`
  }

  return `Error: ${result.message}`
}

// Test
// console.log(formatId(123)) // "#123"
// console.log(formatId('abc')) // "abc"

// console.log(processResult('Done!')) // "Success: Done!"
// console.log(processResult(new Error('Oops'))) // "Error: Oops"

// Export functions
export { formatId, processResult }