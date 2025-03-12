import React from 'react'

export const SingkeContactSocial = ({ Icon, Link }) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center hover:bg-orange hover:text-white transition-all duration-500'>
      <a href={Link} className='cursor-pointer'><Icon /></a>
    </div>
  )
}
