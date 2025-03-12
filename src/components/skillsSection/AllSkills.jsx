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
export const AllSkills = () => {
    return (
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                return (
                    <motion.div
                        variants={fadeIn('up', `0.${index}`)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0 }}>
                        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
                    </motion.div>
                )
            })}
        </div>
    )
}
