import React from 'react';
import logo from '../../../../public/img/logo.PNG'
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';

const NavbarForSmallDevice = () => {
    return (
        <div className='navbarForSmallDevice w-full flex justify-between items-center p-5'>
            {/* Logo */}
            <div className=' flex flex-col justify-between items-center'>
                <Image
                    src={logo}
                    width={120}
                    height={120}
                    quality={100}
                    loading='lazy'
                ></Image>
                <h1 className=' font-bold'>IPO Money</h1>
            </div>
            {/* Menu icon */}
            <Link href="/pages/menu">
                <GiHamburgerMenu className=' text-xl cursor-pointer hover:scale-150 transition-all' />
            </Link>
        </div>
    );
};

export default NavbarForSmallDevice;
