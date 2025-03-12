 import React from 'react'
 import { MdOutlineEmail } from "react-icons/md"
 import { FiPhone } from "react-icons/fi"
 import { IoLocationOutline } from "react-icons/io5"
import { SingleInfo } from '../aboutMe/SingleInfo'

 export const ConInfo = () => {
   return (
     <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='kishorkolekar2002@gmail.com' Image={MdOutlineEmail}/>
        <SingleInfo text='+91 77418-87770' Image={FiPhone}/>
        <SingleInfo text='Pune, Maharashtra, India' Image={IoLocationOutline}/>
     </div>
   )
 }
 