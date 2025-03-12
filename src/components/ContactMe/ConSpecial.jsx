import React from 'react'
import { SingkeContactSocial } from './SingkeContactSocial'
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
export const ConSpecial = () => {
    return (
        <div className='flex gap-4 '>
            <SingkeContactSocial Link='#' Icon={FiGithub}  />
            <SingkeContactSocial Link='#' Icon={FaLinkedinIn} />
            <SingkeContactSocial Link='#' Icon={FaInstagram} />
        </div>
    )
}
