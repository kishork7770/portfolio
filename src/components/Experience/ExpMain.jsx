import React from 'react'
import { ExpText } from './ExpText'
import { ExpTop } from './ExpTop'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

export const ExpMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4 gap-2'>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }}>
        <ExpText />
      </motion.div>
      <motion.div
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.7 }}>
      <ExpTop />
      </motion.div>
      <div className='w-full h-1 mt-6 bg-gray-500 lg:block sm:hidden xs:hidden'></div>

    </div>
  )
}
