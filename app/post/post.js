"use client"
import { useEffect, useState } from "react"

export default function Post() {
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://dummyjson.com/posts")
                const data = await res.json()
                const posts = Array.isArray(data.posts) ? data.posts : [data.posts]
                console.log(posts)
                setPost(posts.map((item) => (
                    <div key={item.id} className='bg-white p-4 shadow'>
                        <h2>{item.title}</h2>
                        <p>👍 Likes: {item.reactions.likes}</p>
                        <p>👎 Dislikes: {item.reactions.dislikes}</p>
                        <p>tags: {item.tags[0]}</p>
                        <p>tags: {item.tags[1]}</p>
                        <p>tags: {item.tags[2]}</p>
                        <p>Rating: {item.rating}</p>
                    </div>
                )))
            } catch (error) {
                setError("Failed to load, possibly network issues");
            }
        }
        fetchData()
    }, [])
    if (error) return <p className="text-red-500 lg:mt-[8em] text-center min-h-[56vh]">Error: {error}</p>;

    return (
        <section className='min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            {post}
        </section>
    )
}
