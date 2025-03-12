import React from 'react'

export const SingleInfo = ({text,Image}) => {
  return (
    <div className='flex gap-4 items-center justify-self-auto'>
        <Image className='text-3xl'/>
        <p>{text}</p>
    </div>
  )
}
