// Creating Types from Object Keys and Values

const routes = {
  home: '/',
  login: '/login',
  settings: '/settings',
} as const

// Create a RouteName type from the keys of routes
type RouteName = keyof typeof routes

// Create a RoutePath type from the values of routes
type RoutePath = typeof routes[RouteName]

// This is now the literal type '/'
const defaultRoute: '/' = routes.home

// Implement getRoutePath using routes
function getRoutePath(name: RouteName): RoutePath {
  return routes[name]
}

// Export values and function
export { routes, defaultRoute, getRoutePath }