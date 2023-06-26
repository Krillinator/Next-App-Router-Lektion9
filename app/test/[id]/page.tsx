"use client"

import { useState } from "react"
import getData from "../../_actions"

type post = {
 userId: number
 id: number
 title: string
 body: string
}

export default function Test({ params }: { params: { id: string } }) {
 const [data, setData] = useState<post>()
 const postId = params.id

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault()

   try {
     const fetchedData = await getData(postId)
     setData(fetchedData)
   } catch (error) {
     console.error("Failed to fetch data:", error)
   }
 }

 if (!postId) {
   return <div>Loading...</div>
 }

 return (
   <div>
     <h1>Post ID: {postId}</h1>
     <p>{postId}</p>
     <form onSubmit={handleSubmit}>
       <button type="submit">Fetch</button>
     </form>
     <p>Data: {data?.body}</p>
   </div>
 )
}



