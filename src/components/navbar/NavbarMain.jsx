import React from 'react'
import { NavbarLogo } from './NavbarLogo'
import { NavbarLinks } from './NavbarLinks'
import { NavbarBtn } from './NavbarBtn'
import { TbMenu2 } from "react-icons/tb";
import { useState, useEffect } from 'react';


const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    //for navbar fixed on scroll
    // let scrollPosition = 0;
    // useEffect(() => {

    //     const handleScroll = () => {
    //         scrollPosition = window.scrollY;
    //         console.log(`${scrollPosition}`);
    //         if (scrollPosition > 100) {
    //             setScrollnav(true);

    //         }
    //         else {
    //             setScrollnav(false);
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <nav className="nav max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 lg:mt-2  xs:border-b-1 md:border-none  lg:border-none backdrop-blur-lg drop-shadow-lg ">
            <div div className='flex justify-between w-full max-w-[1200px] mx-auto lg:bg-gradient-to-rfrom-gray-900to-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange xs:bg-none xs:border-none  sm:border-[0px] md:bg-gradient-to-r from-gray-900 to-black md:items-center md:p-6 md:rounded-r-full md:rounded-l-full md:border-0 md:border-orange' >
                <NavbarLogo />
                <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block` && `${menuOpen ? "xs:block" : "xs:hidden"} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div >
            <div className='flex lg:hidden sm:block p-6 via-gray-700 items-center justify-center rounded-full'>
                <button className='text-2xl p-3 border border-orange rounded-full cursor-pointer hover:bg-orange hover:text-white transition-all duration-500 text-white' onClick={toggleMenu}>
                    <TbMenu2 onClick={toggleMenu} />
                </button>
            </div>
        </nav >
    )
}

export default NavbarMain;
