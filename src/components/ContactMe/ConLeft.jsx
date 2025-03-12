import React from 'react'
import { ContactFrom } from './ContactFrom'

export const ConLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
            <p className='text-white'>Fell free to contact us if you'd like to know more about me <br />or if you have any questions.</p>
        </div>
        <ContactFrom/>
    </div>
  )
}
