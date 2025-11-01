"use client"
import { useEffect, useState } from "react"

export default function Comments() {
    const [comments, seComments] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://dummyjson.com/comments")
                const data = await res.json()
                const posts = Array.isArray(data.comments) ? data.comments : [data.comments]
                console.log(posts)
                seComments(posts.map((item) => (
                    < div className='border-2  p-4 rounded shadow' key={item.id} >
                        <p>body: {item.body}</p>
                        <p>likes: {item.likes}</p>
                        <p>fullName: {item.user.fullName}</p>
                        <p>username: {item.user.username}</p>
                    </ div>
                )))
            } catch (error) {
                setError("Failed to load, possibly network issues");

            }
        }
        fetchData();
    }, [])
    if (error) return <p className="text-red-500 lg:mt-[8em] text-center min-h-[56vh]">Error: {error}</p>;


    return (
        <section className='min-h-[100vh]   p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {comments}
        </section>
    )
}

