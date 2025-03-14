import React from 'react'

const YourFashionExperience = () => {
  return (
    <div className='exp p-5 relative h-[36vh] xl:h-[135vh] lg:h-[85vh] md:h-[45vh] sm:h-[105vh] sm:p-5 sm:w-full'>
      <div className='flex gap-5'>
        <h1 className='mx-1 text-[30px] font-[900] xl:text-9xl xl:mx-0 lg:text-8xl md:text-6xl sm:text-5xl sm:mx-3'>YOUR</h1>
        <p className='text-[8px] mx-0 mt-0 w-35 xl:text-lg xl:w-50 xl:mt-12 lg:mx-15 md:mx-0 md:mt-5 sm:mx-2 sm:text-xs sm:mt-3'>Service quality is a matter of honor</p>
        <p className='text-[8px] mx-0 mt-0 w-40 xl:text-lg xl:w-65 xl:mt-12 lg:mx-15 md:mx-0 md:mt-5 sm:mx-2 sm:text-xs sm:mt-3'>Your specialist shop for clothes and shoes in pakistan</p>
      </div>
      <div className='sm:mt-1'>
        <h1 className='mx-3 text-[30px] font-[900] xl:text-9xl xl:mx-6 lg:text-8xl lg:mx-10 md:text-6xl sm:mx-8 sm:text-5xl'>FASHION INSIDER</h1>
      </div>
      <div className='flex gap-10 sm:mt-1'>
        <p className='text-[8px] mx-1 mt-1 w-30 xl:text-lg xl:w-50 xl:mt-12 xl:mx-20 lg:mx-25 md:mx-15 md:mt-5 sm:mx-10 sm:text-xs sm:mt-3'>Service quality is a matter of honor</p>
        <h1 className='mx-3 text-[30px] font-[900] xl:text-9xl xl:mx-5 lg:text-8xl md:text-6xl sm:text-5xl'>EXPERIENCE</h1>
      </div>
      <div className='absolute bottom-0 w-full'>
        <img className='w-86 xl:w-[96vw] lg:w-245 md:w-182 sm:w-[90vw]' src="mountains.png" alt="" />
      </div>
    </div>
  )
}

export default YourFashionExperience