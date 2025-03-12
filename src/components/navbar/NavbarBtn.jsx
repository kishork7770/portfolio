import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import "../styles/NAvbarBtn.css"
export const NavbarBtn = () => {
    return (
        <div>
            <button className='hereme px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-grey to-black hover: border-blue-700 hover:scale-110 transition-all ease-in-out'>Hire me
                <div className='sm:hidden md:block xs:hidden'>
                    <LuArrowDownRight />
                </div>
            </button>
        </div>
    )
}
