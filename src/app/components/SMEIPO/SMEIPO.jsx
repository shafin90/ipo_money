'use client'
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const SMEIPO = ({ data }) => {
    const [exchangeFilter, setExchangeFilter] = useState('All');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    if (!Array.isArray(data)) {
        // Handle the case where data is not an array
        return <div>Error: Invalid data format</div>;
    }

    // Function to filter data based on exchange
    const filterDataByExchange = (item) => {
        if (exchangeFilter === 'All') return true;
        return item.platform === exchangeFilter;
    };

    // Function to filter data based on date range
    const filterDataByDateRange = (item) => {
        if (!startDate || !endDate) return true;
        const itemDate = new Date(item.dates);
        return itemDate >= startDate && itemDate <= endDate;
    };

    // Function to sort data based on price
    const sortDataByPrice = (a, b) => {
        const priceA = getPriceValue(a.price);
        const priceB = getPriceValue(b.price);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    };

    // Function to convert price range to a sortable value
    const getPriceValue = (price) => {
        if (price === '₹-') return Infinity;

        // Check if the price is a range
        const isRange = price.includes('to');

        if (isRange) {
            const [min, max] = price.match(/\d+/g).map(Number);
            return (min + max) / 2;
        } else {
            // If it's a fixed price, return that value
            return Number(price.replace('₹', ''));
        }
    };

    // Apply filters and sorting to data
    const filteredAndSortedData = data
        .filter(filterDataByExchange)
        .filter(filterDataByDateRange)
        .sort(sortDataByPrice);

    return (
        <div id='smeipo' className='w-11/12 mx-auto mt-28 '>
            <h1 className='text-center font-extrabold text-5xl text-slate-700 mb-14'>SME IPO</h1>

            <div className=' mb-3'>
                <label>
                    Exchange Filter:
                    <select
                        value={exchangeFilter}
                        onChange={(e) => setExchangeFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="NSE SME">NSE</option>
                        <option value="BSE SME">BSE</option>
                    </select>
                </label>
            </div>

            <div className=' mb-3'>
                <label>
                    Sort Order:
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>

            <div >
                <label>
                    Date Range Filter:
                    <Datetime
                        value={startDate}
                        onChange={(date) => setStartDate(date)}
                        inputProps={{ placeholder: 'Select start date' }}
                    />
                    <Datetime
                        value={endDate}
                        onChange={(date) => setEndDate(date)}
                        inputProps={{ placeholder: 'Select end date' }}
                    />
                </label>
            </div>

           


            <table className='w-full  mt-10 border'>
                <thead className=' bg-blue-50'>
                    <tr>
                        <th className='text-start p-7 text-xl text-slate-600'>Company Name</th>
                        <th className='text-start p-7 text-xl text-slate-600'>Dates</th>
                        <th className='text-start p-7 text-xl text-slate-600'>Price</th>
                        <th className='text-start p-7 text-xl text-slate-600'>Platform</th>
                    </tr>
                </thead>


                <tbody>
                    {filteredAndSortedData.map((item, index) => (
                        <tr key={index}>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10'>{item.company_name}</td>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.dates}</td>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.price}</td>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.platform}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default SMEIPO;
