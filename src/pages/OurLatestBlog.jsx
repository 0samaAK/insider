import React from 'react'

const OurLatestBlog = () => {
  return (
    <div className='p-5 mt-0 w-[100vw] blog'>
        <h1 className='text-[30px] mb-10 font-black xl:text-7xl sm:text-4xl sm:px-3'>OUR LATEST BLOG</h1>
        <div className='flex flex-wrap p-4 justify-around'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default OurLatestBlog

function Card() {
  return(
    <div className=' mt-3 w-[100%] md:w-[20%] bitem'>
            <img className='w-[100%]' src="Rectangle 3498.png" alt="" />
            <h2 className='text-xl font-bold mt-2 w-80'>Best Men's Shoes in Pakistan: Step Up in Style</h2>
            <button className='border w-[100%] py-2 mt-3 bg-zinc-800 text-white font-medium rounded-md hover:scale-110 hover:bg-amber-500 duration-200'>READ MORE</button>
          </div>
  )
}