import React from 'react';
import { Link } from 'react-scroll';
const links = [
    { link: "About me", Section: "about" },
    { link: "Skills", Section: "skills" },
    { link: "Experience", Section: "experience" },
    { link: "Project", Section: "projects" },
    { link: "Contact", Section: "contact" },
];

export const NavbarLinks = () => {
    return (
        <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/70  sm:w-full xs:flex-col xs:absolute xs:top-[120%] xs:text-xl lg:bg-transparent bg-cyan/70 backdrop-blur-sm z-20 xs:w-full">
            {links.map((item, index) => (
                <li key={index} className="group">
                    <Link to={item.Section} smooth={true} spy={true} duration={500} offset={-130} className="cursor-pointer text-center hover:text-cyan hover:text-2xl transition-all duration-500">
                        {item.link}
                    </Link>
                    <div className="mx-auto bg-cyan w-0 group-hover:w-20 h-[1px] transition-all duration-500"></div>
                </li>
            ))}
        </ul>
    );
};
