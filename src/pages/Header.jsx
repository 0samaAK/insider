import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    // <div className='p-5 sm:p-5 logoDiv'>
    //     <div className='mt-3 flex justify-between 2xl:mt-10 sm:mt-0'>
    //         <div>
    //             <h1 className='logo text-xs font-bold xl:text-2xl sm:text-xl'>Logo</h1>
    //         </div>
    //         <div>
    //             <ul className='nav flex gap-1.5 font-bold cursor-pointer px-2 xl:px-5 xl:gap-3 sm:px-0 sm:gap-2'>
    //                 <Link to={'/'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>HOME</li></Link>
    //                 <Link to={'/about'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>ABOUT</li></Link>
    //                 <Link to={'/sale'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>SALE</li></Link>
    //                 <Link to={'/shop'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>SHOP</li></Link>
    //                 <Link to={'/blog'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>BLOG</li></Link>
    //                 <Link to={'/contact'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>CONTACT</li></Link>
    //                 <Link to={'/login'}><li className='hover:text-amber-500 duration-200 cursor-pointer text-xs xl:text-xl sm:text-base'>LOGIN</li></Link>
    //             </ul>
    //         </div>
    //     </div>
    //     <div className='mt-8 2xl:mt-20 sm:mt-5'>
    //         <img src="logo.png" alt="" />
    //     </div>
    // </div>
  )
}

export default Header

