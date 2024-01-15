import React from 'react';
import ClosedIPOCard from '../ClosedIPOCard/ClosedIPOCard';

const RecentlyClosedIPO = ({heading}) => {
    return (
        <div className=' my-40'>

            {/* heading */}
            <h1 className=' mb-9 text-center text-3xl font-semibold text-slate-700'>{heading}</h1>

            {/* card========== */}
            <div className=' w-11/12 mx-auto grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3 gap-8'>
                <ClosedIPOCard></ClosedIPOCard>
                <ClosedIPOCard></ClosedIPOCard>
                <ClosedIPOCard></ClosedIPOCard>
            </div>
       
        </div>
    );
};

export default RecentlyClosedIPO;