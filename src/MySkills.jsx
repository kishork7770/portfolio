import React from 'react'

export const MySkills = () => {
  return (
    <div className='w-full border-y border-gray-300 flex justify-around uppercase xl:text-2xl md:text-xl sm:text-2xl xs:text-xl py-8 items-center gap-4 bg-gradient-to-b from-grey to-black-100 bg-opacity-20 mb-5'>
        <p className='md:block sm:hidden xs:hidden'>Quick Learner</p>
        <p className='md:block sm:block xs:hidden'>Problem Solving</p>
        <p>Detailing Master</p>
    </div>
  )
}
