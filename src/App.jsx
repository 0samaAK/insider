import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import OurProducts from './pages/OurProducts'
import BestSeller from './pages/BestSeller'
import YourFashionExperience from './pages/YourFashionExperience'
import WhyTheyLoveUs from './pages/WhyTheyLoveUs'
import OurLatestBlog from './pages/OurLatestBlog'

const App = () => {
  return (
    <div className='bg-[url(/Grid.png)] bg-[#FFE8D9] overflow-x-hidden lg:w-full md:w-full sm:w-full'>
      <div className='my-0'>
        <Header/>
      </div>
      <div className='my-3'>
        <Hero/>
      </div>
      <div className='my-3'>
        <OurProducts/>
      </div>
      <div className='my-3'>
        <BestSeller/>
      </div>
      <div className='my-3'>
        <YourFashionExperience/>
      </div>
      <div className='my-3'>
        <WhyTheyLoveUs/>
      </div>
      <div className='my-3'>
        <OurLatestBlog/>
      </div>
      <div className='my-0'>
        <Footer/>
      </div>
    </div>
  )
}

export default App