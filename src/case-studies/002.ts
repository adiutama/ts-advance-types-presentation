type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

export const fetchUser = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/users/${id}?select=id,firstName,lastName,email`)
  const data = await response.json()

  if (!response.ok) {
    return { status: 'error', error: new Error(data.message)}
  }

  return { status: 'success', data }
}

// ==================================

type UserResponse = unknown