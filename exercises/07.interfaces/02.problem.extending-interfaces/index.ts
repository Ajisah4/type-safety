// Extending Interfaces

// 🐨 Create a Timestamps interface with:
// - createdAt: Date
// - updatedAt: Date

// 🐨 Create a base Entity interface that extends Timestamps with:
// - id: string

// 🐨 Create a User interface that extends Entity with:
// - name: string
// - email: string

// 🐨 Create a Product interface that extends Entity with:
// - name: string
// - price: number

// 🐨 Create an AuditLog interface that extends Timestamps (not Entity) with:
// - action: string
// - userId: string

// 🐨 Create sample `user`, `product`, `log`, and `entity` values that match your
// interfaces. Use `new Date(...)` for timestamp fields.
// 🐨 Export `user`, `product`, `log`, and `entity`. Tests import these by name
// and check their shapes.
// export { user, product, log, entity }
