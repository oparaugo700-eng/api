"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Quotes() {
    const [pro, setPro] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchQuote() {
            try {
                const product = await fetch("https://dummyjson.com/quotes")
                const data = await product.json()
                const items = Array.isArray(data.quotes) ? data.quotes : (data.quotes || [data])
                console.log(items)
                setPro(items.map(item => (
                    < div className='bg-white p-4 shadow' key={item.id} >
                        <p>author: {item.author}</p>
                        <p>quote: {item.quote}</p>
                    </ div>

                )))
            } catch (error) {
                setError("Failed to load, possibly network issues");
            }
        }
        fetchQuote()
    }, [])
    if (error) return <p className="text-red-500 lg:mt-[8em] text-center min-h-[56vh]">Error: {error}</p>;





    return (
        <section className='min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            {pro}
        </section>
    )
}
