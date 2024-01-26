const UpcomingIPO = () => {
  return (
    //now just static TODO: make this after dynamic
    <div id="upcoming-ipos" className="w-11/12 mx-auto mb-96">
      <h1 className="text-center font-extrabold text-5xl text-slate-600 mb-14">
        Upcoming IPO
      </h1>
      {/* this view for lg and md device */}

      <div className="lg:flex md:flex hidden ">
        <table className="w-full  mt-10 border hover:shadow-2xl">
          <thead className=" bg-blue-50">
            <tr>
              <th className="text-start p-7 text-xl text-slate-600">
                Current / Upcoming IPOs
              </th>
              <th className="text-start p-7 text-xl text-slate-600">Date</th>
              <th className="text-start p-7 text-xl text-slate-600">Size</th>
              <th className="text-start p-7 text-xl text-slate-600">Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
              Medi Assist Healthcare
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              15-17 January
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹1,172 Cr.
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹397 to ₹418
              </td>
            </tr>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
              EPACK Durable
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              19-23 January
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹640 Cr.
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹218 to ₹230
              </td>
            </tr>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
              Nova Agri Tech
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              23-25 January
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹144 Cr.
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹39 to ₹41
              </td>
            </tr>
            <tr>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 hover:ps-10">
              Mukka Proteins
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              Coming Soon
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹- Cr.
              </td>
              <td className="px-7 py-4 border bg-gray-50 hover:bg-gray-100 transition-all text-slate-600">
              ₹- to ₹-
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
              <h1 className="font-bold text-lg text-slate-600">Medi Assist Healthcare</h1>
              {/* Add additional information based on your needs */}
              <p>15-17 January</p>
              <p>₹1,172 Cr.	</p>
              <p>₹397 to ₹418</p>
            </div>
            <div className="border bg-slate-50 hover:bg-slate-100 h-40 p-6">
              <h1 className="font-bold text-lg text-slate-600">EPACK Durable</h1>
              {/* Add additional information based on your needs */}
              <p>19-23 January</p>
              <p>₹640 Cr.</p>
              <p>₹218 to ₹230</p>
            </div>
            <div className="border bg-slate-50 hover:bg-slate-100 h-40 p-6">
              <h1 className="font-bold text-lg text-slate-600">Nova Agri Tech</h1>
              {/* Add additional information based on your needs */}
              <p>23-25 January</p>
              <p>₹144 Cr.</p>
              <p>₹39 to ₹41</p>
            </div>
            <div className="border bg-slate-50 hover:bg-slate-100 h-40 p-6">
              <h1 className="font-bold text-lg text-slate-600">Mukka Proteins</h1>
              {/* Add additional information based on your needs */}
              <p>Coming Soon</p>
              <p>₹- Cr.	</p>
              <p>₹- to ₹-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingIPO;
