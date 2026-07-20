// Type Guards (Predicate Functions)

export type TextInput = string | Array<string>

// 🐨 Create a type guard `isStringArray` for arrays of strings
// 💰 Confirm it's an array and every item is a string

// 🐨 Update `normalizeText` to use `isStringArray`
function normalizeText(input: TextInput) {
	if (Array.isArray(input)) {
		return input.join(' ').trim()
	}
	return input.trim()
}

// Different user types
type AdminUser = { permissions: Array<string> }
type RegularUser = { subscription: 'free' | 'premium' }
type GuestUser = { guestCode: string }

export type User = AdminUser | RegularUser | GuestUser

// 🐨 Create type guards for each User variant:
// - `isAdminUser` — permissions array of strings
// - `isRegularUser` — subscription free or premium
// - `isGuestUser` — string guestCode
// 💰 Accept unknown input; return false for non-matching shapes

// 🐨 Update `describeUser` to use the type guards (same output strings as before)
function describeUser(user: User) {
	if ('permissions' in user) {
		return `Admin with ${user.permissions.length} permissions`
	}
	if ('subscription' in user) {
		return `Regular user (${user.subscription})`
	}
	return 'Guest user'
}

// 🐨 Export `isStringArray`, `normalizeText`, `isAdminUser`, `isRegularUser`,
// `isGuestUser`, and `describeUser`. Tests import these by name and check behavior.
// export { isStringArray, normalizeText, isAdminUser, isRegularUser, isGuestUser, describeUser }
