"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <header className='mb-[1em]  md:mb-[6em]'>
            <section className='bg-neutral-700 flex justify-between items-center h-[4em] px-10 text-white shadow-sm drop-shadow-neutral-500 lg:fixed  lg:top-0 lg:right-0 lg:left-0 lg:z-5'>
                <Link href='/'> <h1 className='text-3xl font-bold '>API</h1></Link>
                <nav className='hidden  md:flex gap-4 list-none'>
                    <Link href='/products'><li className='hover:text-lg'>Products</li></Link>
                    <Link href='/users'><li className='hover:text-lg'>Users</li></Link>
                    <Link href='/post'><li className='hover:text-ude'>Posts</li></Link>
                    <Link href='/comment'> <li className='hover:text-lg'>Comments</li></Link>
                    <Link href='/quotes'><li className='hover:text-lg'>Quotes</li></Link>
                    <Link href='/todos'><li className='hover:text-lg'>Todos</li></Link>
                    <Link href='/recipes'><li className='hover:text-lg'>Recipes</li></Link>
                </nav>
                <div className="block md:hidden">
                    <RxHamburgerMenu onClick={toggleMenu} className="text-white text-3xl" />
                </div>
            </section>
            {
                menuOpen && (
                    <nav className=' flex flex-col gap-4 list-none bg-neutral-700 pt-[2em] justify-center items-center pb-5 font-semibold text-white  lg:hidden'>
                        <Link href='/products'><li className='hover:text-lg'>Products</li></Link>
                        <Link href='/users'><li className='hover:text-lg'>Users</li></Link>
                        <Link href='/post'><li className='hover:text-lg'>Posts</li></Link>
                        <Link href='/comments'> <li className='hover:text-lg'>Comments</li></Link>
                        <Link href='/quotes'><li className='hover:text-lg'>Quotes</li></Link>
                        <Link href='/todos'><li className='hover:text-lg'>Todos</li></Link>
                        <Link href='/recipes'><li className='hover:text-lg'>Recipes</li></Link>
                    </nav>
                )
            }
        </header>
    )
}
