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
                    onClick={() => router.push("#mainipos")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#mainipos">Main IPO</Link></li>

                {/* SME IPO */}
                <li
                    onClick={() => router.push("#smeipo")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#smeipo">SME IPO</Link></li>


                {/* IPO Allotment */}
                <li
                    onClick={() => router.push("#ipo-allotment")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#ipo-allotment">IPO Allotment</Link></li>

                {/* IPO Listing */}
                <li onClick={() => router.push("#ipo-listing")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#ipo-listing">IPO Listing</Link></li>

                {/* Experts Review */}
                {/* Experts Review */}
                <li
                    onClick={() => router.push("#experts-review")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#experts-review">Experts Review</Link></li>


                {/* Upcoming IPO */}
                <li
                    onClick={() => router.push("#upcoming-ipos")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="  ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#upcoming-ipos">Upcoming IPO
                    </Link></li>

                {/* Careers */}
                <li
                onClick={() => router.push("#careers")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#careers">Careers</Link></li>


                {/* Contact us */}
                <li
                onClick={() => router.push("#contact-us")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className=" ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#contact-us">Contact us</Link></li>


                {/* About us */}
                <li
                    onClick={() => router.push("#about-us")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="  ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="#about-us">About us
                    </Link></li>


                {/* Disclaimer */}
                <li
                    onClick={() => router.push("#disclaimer")}
                    style={{ borderBottom: "0.5px solid #CFCFCF" }}
                    className="  ps-5 py-4 cursor-pointer transition-all text-lg hover:bg-blue-50 hover:ps-9"
                ><Link href="/">Disclaimer
                    </Link></li>
            </ul>

        </div>
    );
};

export default Menu;