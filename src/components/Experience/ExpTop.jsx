import React from 'react'
import { ExpTopLeft } from './ExpTopLeft'
import { ExpTopMid } from './ExpTopMid'
import { ExpTopRight } from './ExpTopRight'

export const ExpTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col xs:flex-col lg:gap-20 sm:gap-y-10 xs:gap-y-10 items-center justify-center'>
        <ExpTopLeft/>
        <ExpTopMid/>
        <ExpTopRight/>
    </div>
  )
}
