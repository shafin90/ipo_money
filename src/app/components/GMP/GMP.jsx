import React from 'react';

const GMP = ({heading}) => {
    return (
        <div className=' w-11/12 mx-auto pb-20'>

            {/* heading */}
            <h1 className=' text-center font-bold text-3xl my-10'>{heading}</h1>

            {/* Table----green */}
            <div className=' mb-20'>
                <h1 className='p-6  bg-green-50  border border-green-200 flex justify-between items-center'>
                    <span className='text-2xl text-slate-700 font-bold'>
                        IPO Name
                    </span>

                    <span className='text-lg text-slate-700 font-semibold relative right-28'>
                        Listed at-
                    </span>
                </h1>

                {/* grid */}
                <div className='grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3'>

                    {/* price */}
                    <div className=' border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Price Brand</h1>
                    </div>

                    {/* GMP */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>GMP</h1>
                    </div>

                    {/* Listing Date */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Listing Date</h1>
                    </div>

                </div>

            </div>



            {/* Table-----red */}
            <div className=' mb-20'>
                <h1 className='p-6  bg-red-50  border border-red-200 flex justify-between items-center'>
                    <span className='text-2xl text-slate-700 font-bold'>
                        IPO Name
                    </span>

                    <span className='text-lg text-slate-700 font-semibold relative right-28'>
                        Listed at-
                    </span>
                </h1>

                {/* grid */}
                <div className='grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3'>

                    {/* price */}
                    <div className=' border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Price Brand</h1>
                    </div>

                    {/* GMP */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>GMP</h1>
                    </div>

                    {/* Listing Date */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Listing Date</h1>
                    </div>

                </div>

            </div>


             {/* Table----green */}
             <div className=' mb-20'>
                <h1 className='p-6  bg-green-50  border border-green-200 flex justify-between items-center'>
                    <span className='text-2xl text-slate-700 font-bold'>
                        IPO Name
                    </span>

                    <span className='text-lg text-slate-700 font-semibold relative right-28'>
                        Listed at-
                    </span>
                </h1>

                {/* grid */}
                <div className='grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3'>

                    {/* price */}
                    <div className=' border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Price Brand</h1>
                    </div>

                    {/* GMP */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>GMP</h1>
                    </div>

                    {/* Listing Date */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Listing Date</h1>
                    </div>

                </div>

            </div>



            {/* Table-----red */}
            <div className=' mb-20'>
                <h1 className='p-6  bg-red-50  border border-red-200 flex justify-between items-center'>
                    <span className='text-2xl text-slate-700 font-bold'>
                        IPO Name
                    </span>

                    <span className='text-lg text-slate-700 font-semibold relative right-28'>
                        Listed at-
                    </span>
                </h1>

                {/* grid */}
                <div className='grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3'>

                    {/* price */}
                    <div className=' border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Price Brand</h1>
                    </div>

                    {/* GMP */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>GMP</h1>
                    </div>

                    {/* Listing Date */}
                    <div className='border bg-slate-50 h-40 p-6'>
                        <h1 className=' font-bold text-lg text-slate-600'>Listing Date</h1>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default GMP;