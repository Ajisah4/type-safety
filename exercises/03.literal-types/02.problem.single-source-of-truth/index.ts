const routes = {
	home: '/',
	login: '/login',
	settings: '/settings',
}

// 🐨 Create a `RouteName` type from the keys of `routes`

// 🐨 Create a `RoutePath` type from the values of `routes`

// 🐨 Add `as const` so this stays the literal '/'
// @ts-expect-error - 💣 remove this comment
const defaultRoute: '/' = routes.home

// 🐨 Implement `getRoutePath(name: RouteName): RoutePath` using `routes`

// 🐨 Export `routes`, `defaultRoute`, and `getRoutePath` for tests.
// export { routes, defaultRoute, getRoutePath }
