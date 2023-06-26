"use server"

type post = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function getData(postId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 5000 } }
  )
  const post = await response.json()
  console.log(post)

  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }

  return post as post
}

// POST

// PUT

// DELETE
