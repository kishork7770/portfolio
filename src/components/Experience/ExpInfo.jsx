import React from 'react'

export const ExpInfo = ({number ,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-6xl text-cyan'>{number}</p>
        <p className='font-bold text-xl text-gray-500 uppercase -mt-4'>{text}</p>
    </div>
  )
}
