import React from 'react'
import { ExpInfo } from './ExpInfo'

export const ExpTopLeft = () => {
  return (
    <div className='flex flex-col gap-3 w-[300px] '>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
        <div className='flex justify-center items-center gap-4'>
            <ExpInfo number="3" text="Years"/>
                <p className='font-bold text-5xl text-#645550'>-</p>
            <ExpInfo number="5" text="websites"/>
        </div>
        <p className='text-center text-white'>With 1 year of experience building dynamic and user-friendly wb applications.</p>
    </div>
  )
}
