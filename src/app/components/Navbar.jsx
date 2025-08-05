'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname.includes('dashboard'));
    console.log(pathname);

    if (!pathname.includes('/dashboard')) {
        return <nav>
            <ul className='flex justify-center gap-10 my-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
            </ul>
        </nav>
    } else {
        return <></>
    }
};

export default Navbar;