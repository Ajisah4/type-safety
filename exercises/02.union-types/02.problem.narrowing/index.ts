// Type Narrowing Techniques

export type TextInput = string | Array<string>

// Create normalizeText function
function normalizeText(input: TextInput): string {
  if (typeof input === 'string') {
    return input.trim()
  }

  return input.join(' ').trim()
}

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

export type User = AdminUser | RegularUser | GuestUser

// Create describeUser function
function describeUser(user: User): string {
  if ('permissions' in user) {
    return `Admin with ${user.permissions.length} permissions`
  }

  if ('subscription' in user) {
    return `Regular user (${user.subscription})`
  }

  return 'Guest user'
}

// Test
// console.log(normalizeText('  hello  '))
// console.log(normalizeText(['hello', 'world']))

// const admin: User = { permissions: ['read', 'write'] }
// console.log(describeUser(admin))

// const regular: User = { subscription: 'premium' }
// console.log(describeUser(regular))

// const guest: User = { guestCode: 'guest-1' }
// console.log(describeUser(guest))

// Export functions
export { normalizeText, describeUser }