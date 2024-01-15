import React from 'react';

const OngoinIPOSubscriptionTable = () => {
    return (
        <div className=' rounded-3xl overflow-hidden group  border pb-12 w-full bg-slate-50 hover:shadow-2xl transition-all '>

            {/* IPO Name */}
            <h1 className=' text-slate-600 text-center font-bold text-xl mb-5 bg-slate-200 p-8 '>IPO Name</h1>

            {/* Table */}
            <div className='px-10 pt-8 w-full grid grid-rows-2 grid-cols-3'>
                <div className=' h-14 border flex justify-center items-center font-semibold text-slate-600'>QIB</div>
                <div className=' h-14 border flex justify-center items-center font-semibold text-slate-600'>HNI</div>
                <div className=' h-14 border flex justify-center items-center font-semibold text-slate-600'>Retail</div>

                <div className=' h-14 border flex justify-center items-center'></div>
                <div className=' h-14 border flex justify-center items-center'></div>
                <div className=' h-14 border flex justify-center items-center'></div>
            </div>

            <h1 className=' text-slate-600 ps-10 mt-5 font-semibold text-lg group-hover:ps-20 group-hover:scale-110 transition-all'>Total:</h1>

        </div>
    );
};

export default OngoinIPOSubscriptionTable;