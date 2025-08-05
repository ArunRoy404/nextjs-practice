import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='flex-col flex items-center justify-center gap-4 h-screen'>
            404 not found
            <Link href={'/'} className="bg-gray-300 text-black p-3 rounded-sm cursor-pointer">Go to Home</Link>
        </div>
    );
};

export default NotFound404;