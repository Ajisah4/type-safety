// Combining Types with Intersection

// Create base types
type WithId = {
  id: string
}

type WithTimestamps = {
  createdAt: Date
  updatedAt: Date
}

type WithAuthor = {
  authorId: string
  authorName: string
}

// Create User type
type User = WithId &
  WithTimestamps & {
    name: string
    email: string
  }

// Create Post type
type Post = WithId &
  WithTimestamps &
  WithAuthor & {
    title: string
    content: string
  }

// Create Comment type
type Comment = WithId &
  WithTimestamps &
  WithAuthor & {
    text: string
    postId: string
  }

// Create sample User
const user: User = {
  id: 'user-1',
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Alice Johnson',
  email: 'alice@example.com',
}

// Create sample Post
const post: Post = {
  id: 'post-1',
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: user.id,
  authorName: user.name,
  title: 'Learning TypeScript',
  content: 'Intersection types combine multiple types together.',
}

// Create sample Comment
const comment: Comment = {
  id: 'comment-1',
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: user.id,
  authorName: user.name,
  text: 'Great explanation!',
  postId: post.id,
}

// Export samples
export { user, post, comment }