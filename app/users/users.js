"use client"
import { useEffect, useState } from 'react';

export default function UserInfo() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://dummyjson.com/users');
                const data = await res.json();
                console.log(data)

                if (Array.isArray(data.users)) {
                    setUsers(data.users);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, []);

    if (error) return <p className="text-red-500 lg:mt-[8em] text-center min-h-[56vh]">Error: {error}</p>;
    if (users.length === 0) return <p className="text-gray-500 min-h-[100vh]">Loading...</p>;

    return (
        <main className='min-h-[100vh] '>
            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user.id} className="border p-4 rounded shadow">
                        <img
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                            width={100}
                            height={100}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-lg font-semibold text-center">
                            {user.firstName} {user.maidenName}
                        </h2>
                        <p className="text-sm text-center text-gray-600">{user.address.city}, {user.address.postalCode}</p>
                        <p className="text-sm text-center">{user.email}</p>
                        <p className="text-sm text-center">Company: {user.company.name}</p>
                        <p className="text-sm text-center">University: {user.university}</p>
                        <p className="text-sm text-center">Blood Group: {user.bloodGroup}</p>
                        <p className="text-sm text-center">Stock: {user.stock}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}
