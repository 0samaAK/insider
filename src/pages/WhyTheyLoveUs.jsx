import React from 'react'

const WhyTheyLoveUs = () => {
  return (
    <div className=' p-5 love mt-20 lg:mt-10 md:mt-10 sm:mt-5'>
        <h1 className='text-3xl font-black mb-5 xl:text-7xl xl:mb-5 lg:mb-2 sm:text-4xl sm:mb-3 sm:mx-1'>WHY THEY LOVE US</h1>
        <div className='flex flex-wrap gap-10 justify-around lg:gap-10'>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default WhyTheyLoveUs

function Card() {
  return(
    <div className='w-120 loveitem h-50 mt-10 xl:w-100 xl:h-75 lg:w-90'>
            <h2 className='font-black  mb-6 text-xl xl:text-3xl'>Bisma Naaz</h2>
            <p className='text-sm w-90 -mx-3.5 mb-3 lg:w-90 sm:w-[55vw] px-2 xl:mx-0 xl:text-base xl:w-[]'>The quality of this fabric is excellent, very light and comfortable. Inshallah, I’ll buy more. Please also suggest some options for pants, along with their prices.</p>
            <img className='mt-10 mx-20 xl:mx-25 lg:mx-18 ' src="Group 14379.png" alt="" />
            <hr  className=' mr-5 mt-4 xl:mt-8'/>
          </div>
  )
}