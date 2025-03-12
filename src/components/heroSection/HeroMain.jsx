import React from 'react'
import { HeroText } from './HeroText'
import { HeroPic } from './HeroPic'

export const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
        <div className='flex md:flex-row sm:flex-col xs:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 overflow-x-clip'>
        <HeroText/>
        <HeroPic />
        </div>
    </div>

  )
}