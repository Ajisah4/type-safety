// Understanding any vs unknown

// Example of `any` - no type checking
function dangerousProcess(value: any): string {
	// These all compile but might crash at runtime!
	return value.toUpperCase()
}

dangerousProcess('example')

// 🐨 Implement `safeProcess` for unknown input
// Required outputs:
// - string → uppercased
// - number → two decimal places
// - boolean → true / false
// - other values → string conversion without throwing

// 🐨 Export `safeProcess`. Tests import it by name and check runtime behavior.
// export { safeProcess }
