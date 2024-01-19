'use client'

// Import necessary libraries and components
import React, { useState } from 'react';

const IPOListing = ({ data }) => {
  // State for IPO type filter
  const [ipoTypeFilter, setIpoTypeFilter] = useState('All');

  // State for date filter
  const [dateFilter, setDateFilter] = useState('');

  if (!Array.isArray(data)) {
    // Handle the case where data is not an array
    return <div>Error: Invalid data format</div>;
}


  // Function to filter data based on IPO type
  const filterDataByIpoType = (item) => {
    if (ipoTypeFilter === 'All') return true;
    return item.ipo_type === ipoTypeFilter;
  };

  // Function to filter data based on date
  const filterDataByDate = (item) => {
    if (!dateFilter) return true;
    if (item.ipo_listing_date === 'TBA') return false; // Skip items with TBA dates
    return new Date(item.ipo_listing_date) >= new Date(dateFilter);
  };

  // Apply filters to data
  const filteredData = data
    .filter(filterDataByIpoType)
    .filter(filterDataByDate);

  return (
    <div id="ipo-listing" className="w-11/12 mx-auto mt-72">
      <h1 className="text-center font-extrabold text-5xl text-slate-700 mb-14">
        IPO Listing
      </h1>

      {/* Filter options */}
      <div className="mb-4">
        <label className=' font-semibold text-slate-700'>
          IPO Type Filter:
          <select
            value={ipoTypeFilter}
            onChange={(e) => setIpoTypeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="BSE SME">BSE SME</option>
            <option value="NSE SME">NSE SME</option>
            <option value="Mainline">Mainline</option>
          </select>
        </label>
      </div>

      <div className="mb-4">
        <label className=' font-semibold text-slate-700'>
          Date Filter by month:
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </label>
      </div>

      {/* Table to display data */}
      <table className="w-11/12">
        <thead className=' bg-blue-50'>
          <tr>
            <th className='text-start p-7 text-xl text-slate-600'>Company Name</th>
            <th className='text-start p-7 text-xl text-slate-600'>IPO Listing Date</th>
            <th className='text-start p-7 text-xl text-slate-600'>IPO Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.company_name}</td>
              <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.ipo_listing_date}</td>
              <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.ipo_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOListing;
