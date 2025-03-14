import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Shop = () => {
  return (
    <div className='bg-[url(/public/Grid.png)] bg-[#FFE8D9]'>
        <Header/>
        <div className='p-5'>
        <div>
                <img src="shoes.png" alt="" />
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
        </div>
        <Footer/>
    </div>
  )
}

export default Shop