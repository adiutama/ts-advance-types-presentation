export const user: UserWithPosts = {
  id: 1,
  firstName: "Terry",
  lastName: "Medhurst",
  email: "atuny0@sohu.com",
  posts: [
    {
      id: 1,
      title: "Lipsum",
      body: "Lorem ipsum dolor sit amet."
    }
  ]
}

type Cases = [
  Expect<Equal<typeof user, UserWithPosts>>
]

// =============================================

type UserWithPosts = unknown
