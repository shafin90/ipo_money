'use client'

// Import necessary libraries and components
import React, { useRef, useState } from 'react';

const IPOListing = ({ data }) => {
    // State for IPO type filter
    const [ipoTypeFilter, setIpoTypeFilter] = useState('All');

    // State for date filter
    const [dateFilter, setDateFilter] = useState('');
    const question1 = useRef(null)
    const question2 = useRef(null)
    const question3 = useRef(null)
    const question4 = useRef(null)
    const question5 = useRef(null)

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

            {/* Question and answer part=======================1 */}

            {/* Question-1 */}
            <dialog ref={question1} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">What is the IPO listing date?</h3>
                    <p className="py-4">IPO listing date is the date when the company shares will list on the NSE and BSE (Mainboard IPO) or SME IPO will list on SME Emerge platforms respectively. On the listing day, the company shares start trading on exchanges. The listing price is based on the demand of the company in the market.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* Question-2 */}
            <dialog ref={question2} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Which IPO is listing tomorrow or coming days?</h3>
                    <p className="py-4">The IPOs that are going to list are Shelter Pharma, TVS Supply Chain Solutions, Pyramid Technoplast, Aeroflex Industries, Shoora Designs, Crop Life Science, Vishnu Prakash R Punglia. and Bondada Engineering.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* Question-3 */}
            <dialog ref={question3} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">How to Check IPO Listing Date?</h3>
                    <p className="py-4">Just log on to IPOWatch IPO Listing Page and you will get the details about the New IPO Listing Date.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* Question-4 */}
            <dialog ref={question4} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">How do I sell an IPO on a listing day?</h3>
                    <p className="py-4">Either you call your broker to sell your stock which you get on the allotment, or you can do it via the online trading app of your Demat account provider.
</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>



            {/* Question-5 */}
            <dialog ref={question5} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Can you sell an IPO immediately before or after the IPO listing?</h3>
                    <p className="py-4">There are two ways you can sell your IPO application. (1) In the grey market you can sell your application on the Kostak and subject rates. (2) If you get the IPO allotment, you can sell the stock on the listing day from your Demat account.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            <h1 className="text-center font-extrabold text-5xl text-slate-700 mb-14">
                IPO Listing
            </h1>

            {/* Filter and question option */}
            <div className=' flex justify-between items-center mb-4'>
                {/* Filter options */}
                <div>
                    <div >
                        <label className=' font-semibold text-slate-700 text-xl'>
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
                        <label className=' font-semibold text-slate-700 text-xl'>
                            Date Filter by month:
                            <input
                                type="date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                            />
                        </label>
                    </div>
                </div>


                {/* Question part */}
                <div>
                    <h1 onClick={() => question1.current.showModal()}
                        className=' text-slate-500 text-sm py-2 hover:bg-gray-100 transition-all px-3 rounded-lg'>What is the IPO listing date?</h1>

                    <h1 onClick={() => question2.current.showModal()}
                        className='text-slate-500 text-sm py-2 hover:bg-gray-100 transition-all px-3 rounded-lg'>Which IPO is listing tomorrow or coming days?</h1>

                    <h1 onClick={() => question3.current.showModal()}
                        className='text-slate-500 text-sm py-2 hover:bg-gray-100 transition-all px-3 rounded-lg'>How to Check IPO Listing Date?</h1>

                    <h1 onClick={() => question4.current.showModal()}
                        className='text-slate-500 text-sm py-2 hover:bg-gray-100 transition-all px-3 rounded-lg'>How do I sell an IPO on a listing day?</h1>

                    <h1 onClick={() => question5.current.showModal()}
                        className='text-slate-500 text-sm py-2 hover:bg-gray-100 transition-all px-3 rounded-lg'>Can you sell an IPO immediately before or after the IPO listing?</h1>
                </div>
            </div>
            {/* Table to display data */}
          <div className='lg:flex md:flex hidden'>
          <table className="w-full shadow-lg hover:shadow-2xl transition-all">
                <thead className=' bg-blue-50'>
                    <tr>
                        <th className='text-start p-7 text-xl text-slate-600'>Company Name</th>
                        <th className='text-start p-7 text-xl text-slate-600'>IPO Listing Date</th>
                        <th className='text-start p-7 text-xl text-slate-600'>IPO Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index} className=' hover:bg-gray-100 transition-all'>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.company_name}</td>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.ipo_listing_date}</td>
                            <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>{item.ipo_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>

          {/* this table for sm device == mobile / small device */}
          <div>
          <div className='grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-3'>

{filteredData.map((item, index) => (
            <div key={index} className='border bg-slate-50 hover:bg-slate-100 h-40 p-6'>
                <h1 className='font-bold text-lg text-slate-600'>{item.company_name}</h1>
                {/* Add additional information based on your needs */}
                <p>{item.ipo_listing_date}</p>
                <p>{item.ipo_type}</p>
              
            </div>
        ))}

   

</div>
          </div>
        </div>
    );
};

export default IPOListing;
