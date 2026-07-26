// Enum vs Union Types
// Enum-based helper kept as a reference; add a union-based function beside it

// Enum approach (reference — leave this in place)
enum LogLevel {
	Debug = 'debug',
	Info = 'info',
	Warn = 'warn',
	Error = 'error',
}

function logWithEnum(level: LogLevel, message: string): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

// Union type approach
function logWithUnion(
	level: 'debug' | 'info' | 'warn' | 'error',
	message: string
): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

// Export function for tests
export { logWithUnion }
