// Understanding any vs unknown

// Example of `any` - no type checking
function dangerousProcess(value: any): string {
	// These all compile but might crash at runtime!
	return value.toUpperCase()
}

dangerousProcess('example')

// 🐨 Implement `safeProcess` for unknown input
function safeProcess(value: unknown): string {
	if (typeof value === 'string') {
		return value.toUpperCase()
	}

	if (typeof value === 'number') {
		return value.toFixed(2)
	}

	if (typeof value === 'boolean') {
		return value.toString()
	}

	return String(value)
}

// 🐨 Export `safeProcess`. Tests import it by name and check runtime behavior.
export { safeProcess }