import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='p-5 foot mt-0 bg-[url(/public/bg.png)]'>
        <div className='footer flex-col flex sm:flex-row justify-between px-10'>
            <div>
                <h3 className='text-xl font-black mb-5 lg:text-xl mt-5 md:text-lg sm:text-base'>QUIKLINKS</h3>
                <ul>
                    <Link to={'/'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>HOME</li></Link>
                    <Link to={'/about'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>ABOUT</li></Link>
                    <Link to={'/sale'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>SALE</li></Link>
                    <Link to={'/shop'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>SHOP</li></Link>
                    <Link to={'/blog'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>BLOG</li></Link>
                    <Link to={'/contact'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>CONTACT</li></Link>
                    <Link to={'/login'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>LOGIN</li></Link>
                </ul>
            </div>
            <div>
            <h3 className='font-black mb-5 text-xl lg:text-xl mt-5 md:text-lg sm:text-base'>SHOP</h3>
                <ul>
                    <li className='text-lg font-bold hover:text-amber-500 duration-200 cursor-pointer mb-3 lg:text-lg md:text-base sm:text-sm'>MEN</li>
                    <li className='text-lg font-bold hover:text-amber-500 duration-200 cursor-pointer mb-3 lg:text-lg md:text-base sm:text-sm'>WOMEN</li>
                    <li className='text-lg font-bold hover:text-amber-500 duration-200 cursor-pointer mb-3 lg:text-lg md:text-base sm:text-sm'>UNISEX</li>
                </ul>
            </div>
            <div>
            <h3 className='font-black mb-5 text-xl mt-5 lg:text-xl md:text-lg sm:text-base'>ELSE WHERE</h3>
                <ul>
                    <li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>INSTAGRAM</li>
                    <li className='text-lg font-bold hover:text-amber-500 duration-200 cursor-pointer mb-3 lg:text-lg md:text-base sm:text-sm'>FACEBOOK</li>
                    <li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>TWITTER</li>
                </ul>
            </div>
            <div>
            <h3 className='font-black mb-5 text-xl mt-5 lg:text-xl md:text-lg sm:text-base'>GET IN TOUCH</h3>
                <ul>
                    <li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>info@fashioninsider.com</li>
                    <li className='hover:text-amber-500 duration-200 cursor-pointer text-lg font-bold mb-3 lg:text-lg md:text-base sm:text-sm'>+92 0900 786 01</li>
                </ul>
            </div>
        </div>
        <div className='p-5'>
            <img src="Fashion Insider.png" alt="" />
        </div>
        <div className='flex justify-between px-5'>
            <p className='text-xs'><span>&#169;</span>All Rights Reserved To Fashion Insider & Co</p>
            <div className='flex gap-6'>
                <p className='text-xs'>Privacy Policy</p>
                <p className='text-xs'>Terms&Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

{/* <div className='sm:text-sm'>Privacy Policy</div>
                <div className='sm:text-sm'>Terms&Conditions</div> */}

{/* <div className='sm:text-sm'><span>&#169;</span>All Rights Reserved To Fashion Insider & Co </div> */}