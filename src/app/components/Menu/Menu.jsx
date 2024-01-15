import Link from 'next/link';
import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <div className="w-full overflow-y-scroll h-full">

            {/* Menu================ */}
            <ul>
                {/* Home */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9" ><Link href="/">Home</Link></li>

                {/* Main IPO */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">Main IPO</Link></li>

                {/* SME IPO */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">SME IPO</Link></li>

                {/* IPO Allotment */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">IPO Allotment
                    </Link></li>

                {/* IPO Listing */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">IPO Listing</Link></li>

                {/* Experts Review */}
                {/* Experts Review */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">Experts Review</Link></li>


                {/* Upcoming IPO */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">Upcoming IPO
                    </Link></li>

                {/* Careers */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">Careers</Link></li>


                {/* Contact us */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">Contact us</Link></li>


                {/* About us */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">About us
                    </Link></li>


                {/* Disclaimer */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" bg-blue-50 ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-green-100 hover:ps-9"
                ><Link href="/">Disclaimer
                    </Link></li>
            </ul>

        </div>
    );
};

export default Menu;