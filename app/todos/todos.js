"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Product() {
    const [pro, setPro] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTodo() {
            try {
                const product = await fetch("https://dummyjson.com/todos")
                const data = await product.json()
                const items = Array.isArray(data.todos) ? data.todos : (data.todos || [data])
                console.log(items)
                setPro(items.map(item => (
                    < div className='border-2 bg-white p-4 shadow' key={item.id} >
                        <p>completed: {item.completed}</p>
                        <p>todo: {item.todo}</p>
                    </ div>

                )))

            } catch (error) {
                setError("Failed to load, possibly network issues");
            }

        }
        fetchTodo()
    }, [pro])
    if (error) return <p className="text-red-500 lg:mt-[8em] text-center">Error: {error}</p>;



    return (
        <section className='min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            {pro}
        </section>
    )
}
