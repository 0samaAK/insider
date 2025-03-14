import React from 'react'

const BestSeller = () => {
  return (
    <div className='p-2.5 sm:p-0'>
      <div className='flex sel mx-3 flex-wrap gap-2 xl:mx-5 md:gap-6.5 sm:mx-0 sm:gap-3'>
        <h1 className='text-4xl w-[100%] leading-2xl flex text-start font-[900] xl:text-7xl sm:px-3  sm:text-4xl'>BESTSELLER</h1>
        <div>
          <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>SALE</button>
        </div>
        <div>
          <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>NEW</button>
        </div>
        <div>
          <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>IN STOCK</button>
        </div>
      </div>
      <div className='flex pt-5 xl:mx-2 overflow-x-auto'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default BestSeller

function Card() {
  return(
    <div className='selitem border w-[100%] border-gray-300 shadow rounded-md min-h-86 min-w-86 bg-white xl:min-h-75 xl:min-w-75 lg:min-h-60 lg:min-w-60 md:min-h-45 md:min-w-70 sm:min-h-20 sm:min-w-52'>
      <div className='flex justify-between'>
        <div className=' p-3 sm:p-2'>
          <h1 className='text-xl lg:text-xl sm:text-lg'>Air Jordan 1</h1>
          <h2 className='text-base lg:text-sm sm:text-xs'>High Satin Black Toe</h2>
        </div>
        <div className='p-3 sm:p-3'>
          <h3 className='text-amber-500 sm:text-sm'>Rs 45000</h3>
        </div>
      </div>
      <div className='selimg p-10 mt-10 xl:p-0 xl:mt-15 xl:mx-15 lg:p-7 lg:mt-7 lg:mx-5 sm:w-50 sm:mt-0'>
        <img src="Air Jordan red 1.png" alt="" />
      </div>
    </div>
  )
}