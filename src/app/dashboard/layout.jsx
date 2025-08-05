import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-3 border border-white flex flex-col gap-2'>
                dashboard links
                <Link href={'/dashboard/admin-dashboard'}>admin</Link>
                <Link href={'/dashboard/user-dashboard'}>user</Link>
            </div>
            <div className='col-span-9 border border-white text-center'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;