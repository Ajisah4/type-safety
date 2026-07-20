// Composing Types from Building Blocks

// 🐨 Create primitive type aliases named `ID`, `Timestamp`, and `Email`.
// 💰 Underlying types: ID → string, Timestamp → number, Email → string

// 🐨 Create a `User` type that uses those primitives for:
// - id (ID)
// - createdAt (Timestamp)
// - updatedAt (Timestamp)
// - email (Email)
// and includes a `name` string field.

// 🐨 Create a `Post` type that uses those primitives for:
// - id (ID)
// - createdAt (Timestamp)
// - updatedAt (Timestamp)
// - authorId (ID)
// and includes `title` and `content` string fields.

// 🐨 Create a `userSample` and a `postSample` value that match your types.
// 🐨 Export `userSample` and `postSample`. Tests will import these by name and
// verify the fields have the expected runtime types (string vs number).
// export { userSample, postSample }
