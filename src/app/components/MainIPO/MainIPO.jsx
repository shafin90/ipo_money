
const MainIPO = () => {
    return (
        //now just static TODO: make this after dynamic 
        <div id="mainipos" className='w-11/12 mx-auto mt-28 '>
               <h1 className='text-center font-extrabold text-5xl text-slate-700 mb-14'>Main IPO</h1>
          {/* this view for lg and md device */}

          <div className='lg:flex md:flex hidden'>
              <table className='w-full  mt-10 border'>
                    <thead className=' bg-blue-50'>
                        <tr>
                            <th className='text-start p-7 text-xl text-slate-600'>Main__</th>
                            <th className='text-start p-7 text-xl text-slate-600'>Main__</th>
                            <th className='text-start p-7 text-xl text-slate-600'>Main__</th>
                            <th className='text-start p-7 text-xl text-slate-600'>Main__</th>
                        </tr>
                    </thead>


                    <tbody >
                    

                            <tr>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                            </tr>
                            <tr>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                            </tr>
                            <tr>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                                <td className='px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600'>Main__Value</td>
                            </tr>
                     
                    </tbody>

                </table>
              </div>

              {/* this view for sm == small || mobile device */}
        <div>
            
        <div className=' mb-20 lg:hidden md:hidden mt-10'>
               

                {/* grid */}
                <div className='grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-3'>

             
                            <div className='border bg-slate-50 hover:bg-slate-100 h-40 p-6'>
                                <h1 className='font-bold text-lg text-slate-600'>Main__Value</h1>
                                {/* Add additional information based on your needs */}
                                <p>Main__Value</p>
                                <p>Main__Value</p>
                                <p>Main__Value</p>
                            </div>
                

                   

                </div>

            </div>
        </div>    
        </div>
    );
};

export default MainIPO;