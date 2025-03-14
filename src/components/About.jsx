import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import OurProducts from '../pages/OurProducts'

const About = () => {
  return (
    <div className='bg-[url(Grid.png)] bg-[#FFE8D9] lg:w-full'>
        <Header/>
        <div className='p-5'>
            <div className='relative'>
                <img className='w-full h-screen xl:w-full xl:h-screen lg:h-120 sm:h-80' src="sale.png" alt="" />
                <div className='absolute top-0 left-120 px-3 lg:left-100 sm:left-50'>
                  <img src="legs.png" className='w-150 h-180 xl:w-full xl:h-180 xl:mx-10 lg:w-120 lg:h-150 sm:w-90 sm:h-95' alt="" />
                </div>
                <div className='absolute top-0 px-3'>
                  <img src="Balls.png" className='xl:w-full xl:h-screen lg:w-full lg:h-120 sm:w-full sm:h-80' alt="" />
                </div>
            </div>
            <div className='p-5 flex gap-10 mt-30 lg:mt-25 sm:mt-10'>
              <div className='w-1/2 '>
                <h1 className='text-5xl font-black mb-10 pb-5 lg:mb-10 xl:text-7xl lg:text-5xl sm:text-4xl sm:mb-1'>OUR STORY</h1>
                <p className='px-5 lg:text-base sm:text-xs'>Welcome to FASHION INSIDER, our journey started with a vision to redefine everyday fashion. Founded in 2021 by a small group of friends passionate about style, we were driven by a shared goal: to make quality, stylish clothing accessible and enjoyable for everyone. We noticed a gap in the market for versatile pieces that effortlessly blend comfort with style, and so, FASHION INSIDER was born.</p>
                <br />
                <p className='px-5 lg:text-base sm:text-xs'>From the beginning, we've believed that what you wear should be a reflection of who you are. Our inspiration comes from classic and modern trends alike, which we translate into products that fit seamlessly into both casual and formal settings. Our collections—crafted with care and designed for everyday life—let you look and feel your best without compromising on quality.</p>
                <br />
                <p className='px-5 lg:text-base sm:text-xs'>Over the years, we've grown from our humble beginnings to a trusted brand in the world of fashion. We’re committed to creating pieces that stay in your wardrobe for years to come, blending timeless style with the latest trends to give you the best of both worlds.</p>
              </div>
              <div className='w-1/2'>
                <img src="Visual.png" className='py-25 lg:py-30 sm:py-35' alt="" />
              </div>
            </div>
        </div>
        <div>
          <OurProducts/>
        </div>
        <div className='mt-10 pb-10'>
          <h1 className='text-5xl text-center font-black sm:text-4xl'>OUR PERSONAL FAVOURITES</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default About