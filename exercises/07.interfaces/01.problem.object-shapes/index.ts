// Defining Object Shapes with Interfaces

// Create Product interface
interface Product {
  id: string
  name: string
  price: number
  status: 'active' | 'inactive' | 'discontinued'
  description?: string
}

// Create getProductSummary function
function getProductSummary(product: Product): string {
  const description = product.description ?? 'No description available'

  return `${product.name} - $${product.price} - ${description}`
}

// Create sample product without description
const product: Product = {
  id: 'p1',
  name: 'Laptop',
  price: 999.99,
  status: 'active',
}

// Create sample product with description
const productWithDesc: Product = {
  id: 'p2',
  name: 'Keyboard',
  price: 49.99,
  status: 'active',
  description: 'Has description',
}

// Export functions and values
export { getProductSummary, product, productWithDesc }