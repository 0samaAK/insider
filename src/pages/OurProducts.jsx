import React from 'react'

const OurProducts = () => {
  return (
    <div className='p-5 h-full w-[100%] lg:mt-30 -mt-20 xl:mt-10'>
        <h1 className='text-4xl mt-5 text-center font-extrabold mb-5 sm:mt-0 xl:text-7xl lg:text-5xl'>OUR PRODUCTS</h1>
        <div className='h-full flex w-full flex-col sm:flex-row overflow-hidden'>
          <div className='  bg-black flex justify-center items-center w-[100%] xl:h-[70vh] lg:h-[46vh] md:h-[24vh] sm:h-48/50 h-fit overflow-hidden'>
            <img className='opacity-50 hover:opacity-100 duration-300 w-[100%] hover:scale-110 ' src="Image0.png" alt="" />
          </div>
          <div className=' bg-black flex justify-center items-center w-[100%] xl:h-[70vh] lg:h-[46vh] md:h-[24vh] sm:h-48/50 h-[100%] overflow-hidden'>
            <img className='opacity-50 hover:opacity-100 duration-300 w-[100%] hover:scale-110' src="Image1.png" alt="" />
          </div>
          <div className=' bg-black flex justify-center items-center w-[100%] xl:h-[70vh] lg:h-[46vh] md:h-[24vh] sm:h-48/50 h-[100%] overflow-hidden'>
            <img className='opacity-50 hover:opacity-100 duration-300 w-[100%] hover:scale-110' src="Image2.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default OurProducts