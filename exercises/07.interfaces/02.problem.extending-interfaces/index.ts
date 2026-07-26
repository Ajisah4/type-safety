/// Extending Interfaces

// Create Timestamps interface
interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

// Create Entity interface extending Timestamps
interface Entity extends Timestamps {
  id: string
}

// Create User interface extending Entity
interface User extends Entity {
  name: string
  email: string
}

// Create Product interface extending Entity
interface Product extends Entity {
  name: string
  price: number
}

// Create AuditLog interface extending Timestamps
interface AuditLog extends Timestamps {
  action: string
  userId: string
}

// Create sample user
const user: User = {
  id: 'user-1',
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-01-02'),
  name: 'Alice Johnson',
  email: 'alice@example.com',
}

// Create sample product
const product: Product = {
  id: 'product-1',
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-01-02'),
  name: 'Laptop',
  price: 999.99,
}

// Create sample audit log
const log: AuditLog = {
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-01-02'),
  action: 'User created',
  userId: 'user-1',
}

// Create sample entity
const entity: Entity = {
  id: 'entity-1',
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-01-02'),
}

// Export samples
export { user, product, log, entity }