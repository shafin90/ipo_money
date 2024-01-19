'use client'
import Link from 'next/link';
import React from 'react';
import './Menu.css'
import { useRouter } from 'next/navigation';


const Menu = () => {

    const router = useRouter();

    return (
        <div className="w-full overflow-y-scroll h-full">

            {/* Menu================ */}
            <ul>
                {/* Home */}
                <li onClick={() => router.push("/")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9" ><Link href="/">Home</Link></li>

                {/* Main IPO */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Main IPO</Link></li>

                {/* SME IPO */}
                <li
                    onClick={() => router.push("#smeipo")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#smeipo">SME IPO</Link></li>

                {/* IPO Allotment */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">IPO Allotment
                    </Link></li>

                {/* IPO Listing */}
                <li onClick={()=>router.push("#ipo-listing")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#ipo-listing">IPO Listing</Link></li>

                {/* Experts Review */}
                {/* Experts Review */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Experts Review</Link></li>


                {/* Upcoming IPO */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="  ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Upcoming IPO
                    </Link></li>

                {/* Careers */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Careers</Link></li>


                {/* Contact us */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Contact us</Link></li>


                {/* About us */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="  ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">About us
                    </Link></li>


                {/* Disclaimer */}
                <li
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="  ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Disclaimer
                    </Link></li>
            </ul>

        </div>
    );
};

export default Menu;