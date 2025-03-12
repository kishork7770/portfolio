import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

export const HeroText = () => {
    return (
        <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center xs:text-center w-fit '>
            <motion.h2
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0 }}
                className='lg:text-2xl sm:text-xl uppercase text-cyan font-bold mt-20'>Front-End Web Developer</motion.h2>
            <motion.h1
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
            className='md:text-[2.8rem] lg:text-6xl sm:text-4xl xs:text-4xl font-bold font-special text-orange '>KISHOR KOLEKAR</motion.h1>
            <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0 }}
            className='text-lg mt-4 text-white'>A Profesional Web Developer, well experience with React js, Vite js <br />and Node js. </motion.p>
        </div>
    )
}
