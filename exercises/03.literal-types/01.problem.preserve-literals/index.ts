// Using Values to Create Types

const roles = {
  admin: {
    canDeleteUsers: true,
    canBanUsers: true,
  },
  editor: {
    canDeleteUsers: false,
    canBanUsers: true,
  },
  viewer: {
    canDeleteUsers: false,
    canBanUsers: false,
  },
} as const

// Create a Role type from the keys of roles
type Role = keyof typeof roles

// This is now the literal type true
const adminCanDelete: true = roles.admin.canDeleteUsers

// Implement canDeleteUsers using roles data
function canDeleteUsers(role: Role): boolean {
  return roles[role].canDeleteUsers
}

// Export values and function
export { roles, adminCanDelete, canDeleteUsers }