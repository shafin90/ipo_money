import React from 'react';
import Card from '../Card/Card';
import RecentIPOCard from '../RecentIPOCard/RecentIPOCard';
import OngoinIPOSubscriptionTable from '../OngoinIPOSubscriptionTable/OngoinIPOSubscriptionTable';
import Heading from '../Heading/Heading';
import RecentMainIPo from '../RecentMainIPo/RecentMainIPo';
import RecentSMEIPO from '../RecentSMEIPO/RecentSMEIPO';
import RecentlyClosedIPO from '../RecentlyClosedIPO/RecentlyClosedIPO';
import GMP from '../GMP/GMP';

const IPO = () => {
    return (
        <div className='w-full my-32'>

            {/* Heading=========== */}
            <div className="flex justify-around items-center mb-8">
                <h1 className='text-3xl text-gray-600 font-semibold hidden sm:block'>Ongoing Main IPO</h1>
                <h1 className='text-3xl text-gray-600 font-semibold hidden sm:block'>Ongoing SME IPO</h1>
            </div>

            {/* Card section for large screen============== */}
            <div className=' hidden sm:grid grid-rows-2 grid-cols-2 gap-10 w-11/12 mx-auto'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

            {/* Card section for small screen===================== */}
            <div className=' w-full block sm:hidden'>
                {/* Ongoing Main IPO */}
                <h1 className=' text-3xl font-bold text-gray-600 mb-7'>Ongoing Main IPO</h1>
                <div className=' grid grid-rows-2 grid-cols-1 gap-10'>
                    <Card></Card>
                    <Card></Card>
                </div>

                {/* Ongoing SME IPO */}
                <h1 className=' text-3xl font-bold text-gray-600 mb-5 mt-12'>Ongoing SME IPO</h1>
                <div className=' grid grid-rows-2 grid-cols-1 gap-10'>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>

            {/* Recent SME IPOs */}
            <Heading heading="Recent Main IPOs"></Heading>
            <RecentMainIPo></RecentMainIPo>

            {/* Recent SME IPOs */}
            <Heading heading="Recent SME IPOs"></Heading>
            <div className=' my-40'></div>
            <RecentSMEIPO></RecentSMEIPO>

            {/* Ongoing IPO Subscription */}
            <div className=' my-20 mx-auto w-11/12'>

                {/* heading for table */}
                <h1 className='text-center text-3xl font-semibold mt-96 mb-10 text-gray-700'>Ongoing IPO Subscription</h1>

                {/* Table */}
                <div className='w-full grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-10'>
                    <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
                    <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
                    <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
                    <OngoinIPOSubscriptionTable></OngoinIPOSubscriptionTable>
                </div>

            </div>


            {/* Recently closed IPO Subscription - Main IPO */}
            <RecentlyClosedIPO heading="Recently closed IPO Subscription - Main IPO"></RecentlyClosedIPO>

            {/* Recently closed IPO Subscription - Main IPO */}
            <RecentlyClosedIPO heading="Recently closed IPO Subscription - SME IPO"></RecentlyClosedIPO>

            {/* Main IPO GMP====green */}
            <GMP heading="Main IPO GMP" ></GMP>

            {/* Main IPO GMP====red */}
            <GMP heading="SME IPO GMP" ></GMP>

        </div>
    );
};

export default IPO;