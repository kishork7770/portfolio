import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SingleSkill } from './SingleSkill';
import { FaNode } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const skills = [
    {
        skill: 'HTML',
        icon: FaHtml5
    },
    {
        skill: 'CSS',
        icon: FaCss3Alt
    },
    {
        skill: 'JavaScript',
        icon: IoLogoJavascript
    },
    {
        skill: 'React',
        icon: FaReact
    },
    {
        skill: 'TailwindCSS',
        icon: RiTailwindCssFill
    },
    {
        skill: 'Node.js',
        icon: FaNode
    },
    {
        skill: 'Express',
        icon: SiExpress
    }
];

export const AllSkillsSM = () => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-12 my-12'>
            {skills.map((item, index) => {
                return (
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        key={index} className='flex flex-col items-center'>
                        <item.icon className='text-7xl text-orange' />
                        <p className='text-center mt-4'>{item.skill}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}
