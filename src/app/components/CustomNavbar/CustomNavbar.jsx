import React, { lazy } from 'react';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import './CustomNavbar.css'

const CustomNavbar = () => {

    return (
        <div className='customNavbar w-full flex justify-center items-center  sticky top-0  transition-all h-24 z-50'>

            <div className=' w-11/12 flex justify-between items-center'>
                {/* meun================= */}
                <ul className=' flex justify-between items-center '>
                    <li><Link href="" className=' text-blue-900 text-lg font-semibold cursor-pointer hover:text-green-900 transition-all px-7 py-4 hover:shadow-2xl rounded-3xl'>IPO GMP</Link></li>
                    <li><Link href="" className=' text-blue-900 text-lg font-semibold cursor-pointer hover:text-green-900 transition-all px-7 py-4 hover:shadow-2xl rounded-3xl'>IPO Subccription</Link></li>
                    <li><Link href="" className=' text-blue-900 text-lg font-semibold cursor-pointer hover:text-green-900 transition-all px-7 py-4 hover:shadow-2xl rounded-3xl'>Latest IPO Updates</Link></li>
                </ul>

                {/* Icons================= */}
                <ul className=' flex justify-between items-center w-2/12 transition-all '>
                    <li><Link href=""><FaInstagram className=' text-xl cursor-pointer transition-all hover:text-2xl' /></Link></li>
                    <li><Link href=""><BsTwitterX className=' text-xl cursor-pointer transition-all hover:text-2xl' /></Link></li>
                    <li><Link href=""><CiYoutube className=' text-xl cursor-pointer transition-all hover:text-2xl' /></Link></li>
                    <li><Link href=""><FaFacebookF className=' text-xl cursor-pointer transition-all hover:text-2xl' /></Link></li>
                </ul>

            </div>
        </div>
    );
};

export default CustomNavbar;