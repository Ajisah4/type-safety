// Generic Functions

// Generic identity function
function identity<Value>(value: Value): Value {
  return value;
}

// Generic last function
function last<Item>(array: Item[]): Item | undefined {
  return array[array.length - 1];
}

// Test your functions
// console.log(identity('hello')) // 'hello'
// console.log(identity(42)) // 42
// console.log(last([1, 2, 3])) // 3
// console.log(last(['a', 'b'])) // 'b'
// console.log(last<number>([])) // undefined

// Export functions
export { identity, last };
