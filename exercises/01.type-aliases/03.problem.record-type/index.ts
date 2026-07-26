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

// Create a UsersById type using Record to map string IDs to User
type UsersById = Record<string, User>

// Create a RoleCounts type using Record to map role strings to numbers
type RoleCounts = Record<string, number>

// Type usersById object as UsersById
const usersById: UsersById = {
  u1: users[0],
  u2: users[1],
}

// Type roleCounts object as RoleCounts
const roleCounts: RoleCounts = {
  admin: 1,
  member: 1,
}

// Export variables
export { usersById, roleCounts }
