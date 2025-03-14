import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Sale = () => {
  return (
    <div className='bg-[url(/public/Grid.png)] bg-[#FFE8D9]'>
        <Header/>
        <div className='p-5'>
            <div>
                <img src="1.png" alt="" />
            </div>
            <div className='mt-20 sm:mt-10'>
                <h1 className='text-5xl font-black lg:text-5xl sm:text-4xl sm:mx-1'>FIND WHAT'S BEST FOR YOU</h1>
                <div className='mt-6 flex gap-5'>
                    <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>SHOP ALL</button>
                    <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>T-SHIRTS</button>
                    <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>SHOES</button>
                    <button className='px-5 mt-2 py-3 shadow hover:scale-110 hover:bg-amber-500 hover:text-white duration-300 bg-[#FFDCC5] rounded-lg font-[750] border-white xl:px-10 xl:py-3 sm:mt-1 sm:py-2'>ACCESSORIES</button>
                </div>
            </div>
            <div className='mt-20 w-full min-h-screen sm:mt-10'>
                <div className='flex flex-wrap gap-1 px-2 xl:gap-2 sm:px-0 sm:gap-6'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Sale

function Card() {
    return(
        <div className='border border-gray-300 hover:scale-105 duration-300 shadow rounded-md h-90 w-80 bg-white xl:h-75 xl:w-75 lg:h-80 lg:w-80 md:h-65 md:w-58.5 sm:h-70 sm:w-70'>
      <div className='flex justify-between'>
        <div className=' p-3'>
          <h1 className='text-xl sm:text-xl'>Air Jordan 1</h1>
          <h2 className='text-base sm:text-base'>High Satin Black Toe</h2>
        </div>
        <div className='p-3'>
          <h3 className='text-amber-500 sm:text-base'>Rs 45000</h3>
        </div>
      </div>
      <div className='p-10 sm:py-15 mt-10 sm:mt-0'>
        <img src="Air Jordan red 1.png" alt="" />
      </div>
    </div>
    )
}