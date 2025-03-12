import React from 'react'
import { ConInfo } from './ConInfo'
import { ConSpecial } from './ConSpecial'

export const ConRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="pics/email-image.png" alt="contact me" className='max-w-[300px]'/>
        <ConInfo/>
        <ConSpecial/>
    </div>
  )
}
