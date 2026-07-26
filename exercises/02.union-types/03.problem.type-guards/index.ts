// Type Guards (Predicate Functions)

export type TextInput = string | Array<string>

// Create a type guard for arrays of strings
function isStringArray(value: unknown): value is Array<string> {
  return (
    Array.isArray(value) &&
    value.every(item => typeof item === 'string')
  )
}

// Update normalizeText to use isStringArray
function normalizeText(input: TextInput): string {
  if (isStringArray(input)) {
    return input.join(' ').trim()
  }

  return input.trim()
}

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

export type User = AdminUser | RegularUser | GuestUser

// Create type guards for User variants
function isAdminUser(user: unknown): user is AdminUser {
  return (
    typeof user === 'object' &&
    user !== null &&
    'permissions' in user &&
    Array.isArray((user as AdminUser).permissions) &&
    (user as AdminUser).permissions.every(
      permission => typeof permission === 'string'
    )
  )
}

function isRegularUser(user: unknown): user is RegularUser {
  return (
    typeof user === 'object' &&
    user !== null &&
    'subscription' in user &&
    (((user as RegularUser).subscription === 'free') ||
      ((user as RegularUser).subscription === 'premium'))
  )
}

function isGuestUser(user: unknown): user is GuestUser {
  return (
    typeof user === 'object' &&
    user !== null &&
    'guestCode' in user &&
    typeof (user as GuestUser).guestCode === 'string'
  )
}

// Update describeUser to use type guards
function describeUser(user: User): string {
  if (isAdminUser(user)) {
    return `Admin with ${user.permissions.length} permissions`
  }

  if (isRegularUser(user)) {
    return `Regular user (${user.subscription})`
  }

  if (isGuestUser(user)) {
    return 'Guest user'
  }

  return 'Guest user'
}

// Export functions
export {
  isStringArray,
  normalizeText,
  isAdminUser,
  isRegularUser,
  isGuestUser,
  describeUser,
}