import React from 'react'
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='text-white bg-neutral-700  lg:bottom-0 lg:w-full lg:mt-[3em]'>
            <main className='grid text-center gap-3  sm:grid-cols-2 sm:gap-10 md:grid-cols-3  pt-2'>
                <section>
                    <h2 className='font-bold text-lg md:text-2xl '>API</h2>
                    <p>Displaying api to see the content</p>
                </section>
                <section>
                    <h2 className='font-bold text-lg md:text-2xl'>Location</h2>
                    <div className='flex justify-center items-center'>
                        <CiLocationOn className='text-2xl' />
                        <p>Kurudu, Abuja</p>
                    </div>

                </section>
                <section className='flex jusfity-center items-center flex-col text-lg md:text-2xl  '>
                    <h2 className='font-bold text-lg md:text-2xl'>Connect with us</h2>
                    <ul className='gap-7 flex'>
                        <li><Link href="https://www.linkedin.com/in/ugo-opara-562b772ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></Link> </li>
                        <li><Link href="https://www.instagram.com/king__sleeey?utm_source=qr&igsh=MTlnZWIxdTdyMDRncw=="><SiInstagram /></Link> </li>
                        <li><Link href="https://x.com/King_sleeey"><BsTwitterX /></Link></li>
                        <Link href="tel:+234 9160909422"><FaWhatsapp /></Link>
                    </ul>
                </section>
            </main>

            <section className='flex justify-center items-center pt-5 md:pt-5'>
                <p>&copy; {year} Shop Rex. All right reserved</p>
            </section>
        </footer>
    )
}

export default Footer