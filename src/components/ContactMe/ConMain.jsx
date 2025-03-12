import React from 'react'
import { ConLeft } from './ConLeft'
import { ConRight } from './ConRight'
import { ContactFrom } from './ContactFrom'

export const ConMain = () => {
    return (

        <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
            <h2 className='text-6xl text-cyan mb-10 text-center '>Contact Me</h2>

            <div className='flex justify-between gap-24 bg-gray-500 p-8 rounded-2xl lg:flex-row sm:flex-col xs:flex-col'>
                    
                <ConLeft />
                <ConRight />
            </div>

        </div>

    )
}
