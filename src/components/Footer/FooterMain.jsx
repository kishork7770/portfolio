import React from 'react'

const links = [
    { link: "About me", Section: "about" },
    { link: "Skills", Section: "skills" },
    { link: "Experience", Section: "experience" },
    { link: "Project", Section: "project" },
    { link: "Contact", Section: "contact" },
];

export const FooterMain = () => {
    return (
        <div className='px-4'>
            <div className='w-full h-1 bg-gray-400 mt-24'></div>
            <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
                <p className='text-3xl text-gray-100'>Kishor Kolekar</p>
                <ul className='flex gap-4 text-gray-100 text-xl '>
                    {links.map((items, index) => {
                        return <li key={index}>
                            <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer'>{items.link}</a>
                        </li>
                    })}
                </ul>
            </div>
            <p className='max-w-[1200px] mx-auto text-right mt-2 text-sm text-gray-400'>© 2025 Kishor | All Rights Reserved.
            </p>
        </div>
    )
}
