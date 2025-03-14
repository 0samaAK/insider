import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-5 sm:p-5 logoDiv'>
        <div className='mt-3 flex justify-between 2xl:mt-10 sm:mt-0'>
            <div>
                <h1 className='logo text-xs font-bold xl:text-2xl sm:text-xl'>Logo</h1>
            </div>
            <div>
                <ul className='nav flex gap-1.5 font-bold cursor-pointer px-2 xl:px-5 xl:gap-3 sm:px-0 sm:gap-2'>
                    <Link to={'/'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>HOME</li></Link>
                    <Link to={'/about'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>ABOUT</li></Link>
                    <Link to={'/sale'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>SALE</li></Link>
                    <Link to={'/shop'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>SHOP</li></Link>
                    <Link to={'/blog'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>BLOG</li></Link>
                    <Link to={'/contact'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>CONTACT</li></Link>
                    <Link to={'/login'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>LOGIN</li></Link>
                </ul>
            </div>
        </div>
        <div className='mt-8 2xl:mt-20 sm:mt-5'>
            <img src="logo.png" alt="" />
        </div>
    </div>
  )
}

export default Header

