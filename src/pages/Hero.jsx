import React from 'react'
import "../App.css"
const Hero = () => {
  return (
    <div className='p-5'>
      <div className='relative overflow-y-hidden h-[30vh] sm:h-[90vh] div xl:h-[110vh] lg:h-[50vh] md:h-[40vh]' id='banner'>
        <img className='absolute w-[98vw]' src="public/sand.png" alt="" />
        <img className='absolute animate-bounce top-0 wave1 w-[98vw]' src="public/wave 1.png" alt="" />
        <img className='absolute animate-bounce top-0 wave2 w-[98vw]' src="public/wave 2.png" alt="" />
        <img className='absolute shoe w-[25vw] xl:top-[20vh] sm:left-[35vw] left-[30vw] sm:top-[25vh] top-[4vh] md:top-[10vh] shoe' src="/Shoe.png" alt="" />
      </div>
    </div>
  )
}

export default Hero

// 2xl:mx-100 xl:mx-100 xl:h-80 xl:w-80 lg:w-65 lg:h-65 lg:mx-50 md:mx-25  md:w-55 sm:w-50 sm:top-15 sm:left-10 sm:mx-50