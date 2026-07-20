// Record Types
// Building lookup tables with type aliases

type User = {
	id: string
	name: string
	role: string
}

const users: Array<User> = [
	{ id: 'u1', name: 'Ava', role: 'admin' },
	{ id: 'u2', name: 'Ben', role: 'member' },
]

// 🐨 Create a UsersById type using Record to map string IDs to User

// 🐨 Create a RoleCounts type using Record to map role strings to numbers

// 🐨 Type this usersById object as UsersById (remove @ts-expect-error when ready)
// @ts-expect-error - 💣 remove this comment when you create UsersById
const usersById: UsersById = {
	u1: users[0],
	u2: users[1],
}

// 🐨 Type this roleCounts object as RoleCounts (remove @ts-expect-error when ready)
// @ts-expect-error - 💣 remove this comment when you create RoleCounts
const roleCounts: RoleCounts = {
	admin: 1,
	member: 1,
}

// 🐨 Export `usersById` and `roleCounts`. Tests import these by name.
// export { usersById, roleCounts }
