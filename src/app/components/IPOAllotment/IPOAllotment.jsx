const IPOAllotment = () => {
  return (
    // TODO: create this to dynamically
    <div id="ipo-allotment" className="w-11/12 mx-auto mb-96 ">
      <h1 className="text-center font-extrabold text-5xl text-slate-600 mb-14">
      IPO Allotment 
      </h1>
      {/* this view for lg and md device */}

      <div className="lg:flex md:flex hidden">
        <table className="w-full  mt-10 border">
          <thead className=" bg-blue-50">
            <tr>
              <th className="text-start p-7 text-xl text-slate-600">
                Company Name
              </th>
              <th className="text-start p-7 text-xl text-slate-600">
                Issue Open
              </th>
              <th className="text-start p-7 text-xl text-slate-600">
                Issue Close
              </th>
              <th className="text-start p-7 text-xl text-slate-600">
                Issue Price (Rs)
              </th>
              <th className="text-start p-7 text-xl text-slate-600">
                Allotment
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
                Baweja Studios Limited
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Jan 29, 2024
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Feb 01, 2024
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
               
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              
              </td>
            </tr>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Mayank Cattle Food Limited
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Jan 29, 2024	
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Jan 31, 2024
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              108	
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              
              </td>
            </tr>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Fonebox Retail Limited
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Jan 25, 2024
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Jan 30, 2024
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
               
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
               
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* this view for sm == small || mobile device */}
      <div>
        <div className=" mb-20 lg:hidden md:hidden mt-10">
          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-3">
            <div className="border bg-slate-50 hover:bg-slate-100 h-40 p-6">
              <h1 className="font-bold text-lg text-slate-600">Baweja Studios Limited</h1>
              {/* Add additional information based on your needs */}
              <p>Jan 29, 2024</p>
              <p>Jan 31, 2024</p>
              <p>108</p>
              <p></p>
            </div>
            <div className="border bg-slate-50 hover:bg-slate-100 h-40 p-6">
              <h1 className="font-bold text-lg text-slate-600">Fonebox Retail Limited</h1>
              {/* Add additional information based on your needs */}
              <p>	Jan 25, 2024</p>
              <p>Jan 30, 2024</p>
              <p></p>
              <p>	</p>
            </div>
            <div className="border bg-slate-50 hover:bg-slate-100 h-40 p-6">
              <h1 className="font-bold text-lg text-slate-600">DelaPlex Limited</h1>
              {/* Add additional information based on your needs */}
              <p>	Jan 25, 2024</p>
              <p>Jan 30, 2024</p>
              <p></p>
              <p>	</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOAllotment;
