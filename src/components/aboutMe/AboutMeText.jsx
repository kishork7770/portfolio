import React from 'react'
export const AboutMeText= () => {
  return (
    <div className='flex flex-col md:items-center sm:items-center xs:items-center md:text-left sm:text-center xs:text-center '>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>I'm Kishor, a web developer an coder. I Specialize in React and fron-end web development, Worked on web projects. 
        I also have knowledge of Java programming language. I enjoy continuous learning nad sharing knowledge which also helps me to achieve my goals. </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-starts sm:self-center xs:self-center text-white hover:text-cyan '>
            My Projects.
        </button>
    </div>
  )
}

 