import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { LuCircleDashed } from "react-icons/lu";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

export const HeroPic = () => {
    return (
        <motion.div 
         variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0 }}
        className=' h-full flex items-center justify-center w-auto'>
            
            <img src="pics/HeroPic.png" alt="Kishor Kolekar" className='max-h-[400px] w-auto hover:scale-110  transition-all duration-500 overflow-hidden' />
            <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
                <PiHexagonThin className='md:h-[90%] sm:h-[120%] xs:h-[120%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
            </div>
        </motion.div>
    )
}
