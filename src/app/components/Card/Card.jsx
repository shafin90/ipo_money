import React from 'react';
import { FaCheckToSlot } from "react-icons/fa6";

const Card = () => {
    return (
        <div className='w-full rounded-3xl overflow-hidden h-96 border bg-slate-50 transition-all hover:shadow-2xl relative z-10 
        '>

            {/* Date and IPO name=== */}
            <h1 className=' p-8 text-slate-600 font-bold bg-blue-50 flex justify-between items-end'>
                <span className=' text-xl'>IPO Name</span>
                <span className=' text-sm'>13 Dec - 15 dec</span>
            </h1>

            {/* IPO name list */}
            <ul className=' p-8 h-full'>
                <li className=' hover:bg-slate-100 hover:ps-5 cursor-pointer transition-all border-b text-lg text-slate-600 flex justify-start items-center py-5 '><FaCheckToSlot className=' text-slate-600 text-2xl me-4' /> IPO name-1 </li>

                <li className='hover:bg-slate-100 hover:ps-5 cursor-pointer transition-all border-b text-lg text-slate-600 flex justify-start items-center py-5'><FaCheckToSlot className=' text-slate-600 text-2xl me-4' /> IPO name-2 </li>

                <li className='hover:bg-slate-100 hover:ps-5 cursor-pointer transition-all text-lg text-slate-600 flex justify-start items-center py-5'><FaCheckToSlot className=' text-slate-600 text-2xl me-4' /> IPO name-3 </li>
            </ul>

        </div>
    );
};

export default Card;