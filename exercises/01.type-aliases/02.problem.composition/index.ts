// Composing Types from Building Blocks

// Create primitive type aliases
type ID = string
type Timestamp = number
type Email = string

// Create User type
type User = {
  id: ID
  createdAt: Timestamp
  updatedAt: Timestamp
  email: Email
  name: string
}

// Create Post type
type Post = {
  id: ID
  createdAt: Timestamp
  updatedAt: Timestamp
  authorId: ID
  title: string
  content: string
}

// Create userSample value
const userSample: User = {
  id: 'user-123',
  createdAt: 1722000000,
  updatedAt: 1722005000,
  email: 'alice@example.com',
  name: 'Alice Johnson',
}

// Create postSample value
const postSample: Post = {
  id: 'post-456',
  createdAt: 1722000000,
  updatedAt: 1722005000,
  authorId: 'user-123',
  title: 'Learning TypeScript',
  content: 'Type aliases help create reusable and readable code.',
}

// Export samples
export { userSample, postSample }
