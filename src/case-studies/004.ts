type Post = {
  id: number
  title: string
  body: string
}

type Cases = [
  ExpectEqual<Pick<Post, 'id'>, MyPick<Post, 'id'>>,
  ExpectEqual<Omit<Post, 'id'>, MyOmit<Post, 'id'>>,
  ExpectEqual<Partial<Post>, MyPartial<Post>>
]

// ============================================

type MyPick = unknown
type MyOmit = unknown
type MyPartial = unknown



export {}