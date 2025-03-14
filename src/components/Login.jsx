import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Login = () => {
  return (
    <div className=' bg-[url(/public/Grid.png)] bg-[#FFE8D9]'>
        <Header/>
        <div className='flex mt-5 pb-10 justify-around'>
            <form action="" className='shadow-lg text-lg mt-10 bg-white rounded-2xl p-10 w-100 h-90'>
                <label htmlFor="" className='text-gray-500 sm:text-lg'>Email</label>
                <div className='mb-5'>
                    <input className='w-full shadow-lg px-2 py-2 border rounded-lg border-gray-300 outline-none' type="text" />
                </div>
                <label htmlFor="" className='text-gray-500 sm:text-lg'>Password</label>
                <div className='mb-10'>
                    <input className='w-full shadow-lg px-2 py-2 border rounded-lg border-gray-300 outline-none' type="password" />
                </div>
                <div className='mb-1'>
                    <button className='border hover:scale-110 shadow-2xl border-gray-300 duration-300 px-5 rounded-lg py-3 w-full cursor-pointer mb-3 bg-amber-500 text-white sm:text-base'>Login</button>
                </div>
                <p className='text-center text-lg px-3 text-gray-500 sm:text-base'>Don't Have Account?<span className='text-amber-500 px-3 cursor-pointer'>SignUp</span></p>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Login