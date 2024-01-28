import React from 'react';

const Disclaimer = () => {
    return (
        <div id='disclaimer' className='w-full mt-64 overflow-hidden pb-32'>
            <h1 className=' text-6xl font-bold text-center text-gray-600 mb-16 '>Disclaimer</h1>
            <article className=' border-4 border-dashed border-gray-300 rounded-xl text-xl text-gray-600 w-10/12 mx-auto p-10 cursor-pointer hover:shadow-2xl hover:scale-110 transition-all hover:rotate-2'>
                Stock Market investments are subject to market risks, read all scheme related documents carefully before investing. All the information provided on our IPO Portal is for education purpose only. We do not claim any facts, and figure mentioned here.
            </article>
        </div>
    );
};

export default Disclaimer;
