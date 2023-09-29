import React from 'react'
import LogoPrimary from '../public/LogoPrimary.png'
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi'
const Drawer = () => {
    return (
        <>
            <label htmlFor="my-drawer" className="btn btn-ghost">
                <HiMenuAlt2 className='text-gray-300 text-2xl' />
            </label>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="z-20 drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay opacity-0"></label>
                    <ul className=" bg-primary menu mt-24 w-48 custom-min-height text-gray-300">
                        {/* Sidebar content here */}
                        <Link className='custom-hover' href="/">Home</Link>
                        <Link className='custom-hover' href="/games">Game Library</Link>
                        <Link className='custom-hover' href="/profile">User Profile</Link>
                        <Link className='custom-hover' href="/chat">Chat</Link>
                        <Link className='custom-hover' href="/streaming">Streaming</Link>
                        <Link className='custom-hover' href="/community">Community</Link>
                        <Link className='custom-hover' href="/news">News</Link>
                        <Link className='custom-hover' href="/store">Store</Link>
                        <Link className='custom-hover' href="/events">Events</Link>
                        <Link className='custom-hover' href="/support">Support</Link>
                        <Link className='custom-hover' href="/gallery">Media Gallery</Link>
                        <Link className='custom-hover' href="/about">About Us</Link>
                        <Link className='custom-hover' href="/privacy">Privacy Policy</Link>
                    </ul>
                </div>
                <Link href={"/"} className="btn btn-ghost normal-case text-xl"><Image priority={true} className='h-12 w-40' src={LogoPrimary} alt='LogoPrimary' ></Image></Link>
            </div>
        </>
    )
}

export default Drawer