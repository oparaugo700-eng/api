"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Product() {
    const [recipe, setRecipe] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const product = await fetch("https://dummyjson.com/recipes")
                const data = await product.json()
                const items = Array.isArray(data.recipes) ? data.recipes : (data.recipes || [data])
                console.log(items)
                setRecipe(items.map(item => (


                    < section className='p-6 border-2' key={item.id} >
                        <img
                            src={item.image}
                            width={250}
                            height={200}
                            alt={item.title}
                            className="flex justify-center items-center w-full h-[200px]"
                        />
                        <p>name: {item.name}</p>
                        <p>cuisine: {item.cuisine}</p>
                        <p>difficulty: {item.difficulty}</p>
                        <p>prepTimeMinutes: {item.prepTimeMinutes}</p>
                        <p>Rating: {item.rating}</p>
                        <p>reviewCount: {item.reviewCount}</p>

                    </ section>

                )))
            } catch (error) {
                setError("Failed to load, possibly network issues");
            }

        }
        fetchData();

    }, [])
    if (error) return <p className="text-red-500 lg:mt-[8em] text-center min-h-[56vh]">Error: {error}</p>;






    return (
        <section className='min-h-[100vh] mt-5 '>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow">
                {recipe}
            </div>

        </section>
    )
}
