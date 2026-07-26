// Creating Reusable Type Aliases

// Create a type alias User
type User = {
  id: string
  name: string
  email: string
}

// Create a userSample value using User type
const userSample: User = {
  id: 'u1',
  name: 'Alice',
  email: 'alice@example.com',
}

// Create greet function
function greet(user: User): string {
  return `Hello, ${user.name}!`
}

// Create a type alias Product
type Product = {
  id: string
  name: string
  price: number
  inStock: boolean
}

// Create a productSample value using Product type
const productSample: Product = {
  id: 'p1',
  name: 'Laptop',
  price: 999.99,
  inStock: true,
}

// Create formatProduct function
function formatProduct(product: Product): string {
  const status = product.inStock ? 'In Stock' : 'Out of Stock'

  return `${product.name} - $${product.price} - ${status}`
}

// Export values and functions
export { greet, formatProduct, userSample, productSample }
