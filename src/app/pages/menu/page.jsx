import Menu from '@/app/components/Menu/Menu';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Menu></Menu>

            <div className=' flex justify-end items-center my-10'>
                <Link href="/" className=' text-lg font-semibold px-7 py-4 bg-blue-300 hover:bg-green-300 transition-all cursor-pointer'>Back</Link>

            </div>
        </div>
    );
};

export default page;