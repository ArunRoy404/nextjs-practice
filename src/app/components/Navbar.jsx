import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-center gap-10 my-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
            </ul>
        </nav>
    );
};

export default Navbar;