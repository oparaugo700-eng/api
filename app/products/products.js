"use client";
import { useEffect, useState } from "react";

export default function Product() {
    const [pro, setPro] = useState(null)
    const [error, setError] = useState(null);



    useEffect(() => {
        async function fetchData() {
            try {
                const product = await fetch("https://dummyjson.com/products");
                const data = await product.json();
                const items = Array.isArray(data.products) ? data.products : data.products || [data];
                console.log(items);
                setPro(items.map((item) => (
                    <section key={item.id}>


                        <div className="border-2 bg-white p-4 shadow" >
                            <img
                                src={item.images[0]}
                                width={200}
                                height={100}
                                alt={item.title}
                                className="w-full h-[200px]"
                            />
                            <div className="pt-5">
                                <p className="">
                                    <span className="text-lg font-semibold">Brand:</span>
                                    {item.brand}
                                </p>
                                <p>
                                    <span className="text-lg font-semibold">Description: </span>
                                    {item.description}
                                </p>
                                <p>
                                    <span className="text-lg font-semibold">
                                        AvailabilityStatus:
                                    </span>
                                    {item.availabilityStatus}
                                </p>
                                <p>
                                    <span className="text-lg font-semibold">Price:</span>
                                    {item.price}
                                </p>
                                <p>
                                    <span className="text-lg font-semibold">Rating:</span>
                                </p>
                                <p>
                                    <span className="text-lg font-semibold">Stock:</span>
                                    {item.stock}
                                </p>
                            </div>
                        </div>
                    </section>
                )));
            } catch (error) {
                setError("Failed to load, possibly network issues");
            }
        }
        fetchData();
    }, []);

    if (error) return <p className="text-red-500 lg:mt-[8em] text-center min-h-[56vh] ">Error: {error}</p>;

    return (
        <main className="min-h-[100vh] ">



            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {pro}
            </section>
        </main>

    );
}

