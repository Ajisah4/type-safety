// Combining Types with Intersection

// 🐨 Create base types named `WithId`, `WithTimestamps`, and `WithAuthor`.
// Required fields / runtime types:
// - WithId: id (string)
// - WithTimestamps: createdAt, updatedAt (Date)
// - WithAuthor: authorId, authorName (string)

// 🐨 Create a User type by intersecting WithId and WithTimestamps,
// and also include name and email (string)

// 🐨 Create a Post type by intersecting WithId, WithTimestamps, and WithAuthor,
// and also include title and content (string)

// 🐨 Create a Comment type by intersecting WithId, WithTimestamps, and WithAuthor,
// and also include text and postId (string)

// 🐨 Create sample `user`, `post`, and `comment` values that match your types.
// 💰 Timestamps must be real Date instances at runtime.
// 🐨 Export `user`, `post`, and `comment`. Tests import these by name and check
// their shapes.
// export { user, post, comment }
