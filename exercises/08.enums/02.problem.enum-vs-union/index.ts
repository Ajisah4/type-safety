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

// 🐨 Add `logWithUnion(level, message): void` that uses a string literal union
// instead of the LogLevel enum for the level parameter:
// 'debug' | 'info' | 'warn' | 'error'
// 💰 Log in the same style as logWithEnum: `[LEVEL] message`

// 🐨 Export `logWithUnion`. Tests import this by name.
// export { logWithUnion }
