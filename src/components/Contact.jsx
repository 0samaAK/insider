import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Contact = () => {
  return (
    <div className='bg-[url(/public/Grid.png)] bg-[#FFE8D9]'>
        <Header/>
        <div className='p-10 mt-5'>
          <div className='w-full h-150 flex shadow-2xl bg-amber-500 rounded-2xl'>
            <div className='p-10 w-1/2 lg:pt-15'>
            <h1 class="text-9xl px-10 font-black tracking-wider text-white mb-10 xl:text-8xl xl:mt-3 xl:text-center lg:text-7xl lg:px-15 sm:text-5xl sm:px-2 sm:py-3">GET IN TOUCH</h1>
            <div className='pt-10 justify-around flex gap-10 lg:pt-15 lg:gap-4 lg:flex-row sm:flex-col sm:px-15 sm:pt-6'>
              <div className='w-25 h-25 px-9 py-9 border shadow-2xl hover:scale-110 duration-300 bg-amber-400 rounded-full text-white xl:h-25 xl:w-25 xl:px-9 xl:py-9 lg:w-20 lg:h-20 lg:px-7 lg:py-7 sm:w-18 sm:h-18 sm:px-6 sm:py-6'>
                <svg width="24" height="24" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.7168 0.139936C9.58883 0.240336 8.13563 0.579936 6.86523 1.07914C5.55043 1.59154 4.43603 2.27914 3.32723 3.39194C2.21843 4.50474 1.53563 5.61994 1.02683 6.93674C0.534432 8.20994 0.200832 9.66434 0.106832 11.7935C0.0128324 13.9227 -0.00796757 14.6071 0.00243243 20.0383C0.0128324 25.4695 0.0368324 26.1503 0.140032 28.2839C0.241632 30.4115 0.580032 31.8643 1.07923 33.1351C1.59243 34.4499 2.27923 35.5639 3.39243 36.6731C4.50563 37.7823 5.62003 38.4635 6.94003 38.9731C8.21203 39.4647 9.66683 39.7999 11.7956 39.8931C13.9244 39.9863 14.6096 40.0079 20.0392 39.9975C25.4688 39.9871 26.1524 39.9631 28.2856 39.8619C30.4188 39.7607 31.864 39.4199 33.1352 38.9231C34.45 38.4087 35.5648 37.7231 36.6732 36.6095C37.7816 35.4959 38.464 34.3799 38.9724 33.0623C39.4652 31.7903 39.8 30.3355 39.8924 28.2083C39.9856 26.0735 40.0076 25.3919 39.9972 19.9615C39.9868 14.5311 39.9624 13.8503 39.8612 11.7175C39.76 9.58474 39.4212 8.13634 38.9224 6.86474C38.4084 5.54994 37.7224 4.43674 36.6096 3.32674C35.4968 2.21674 34.38 1.53474 33.0628 1.02754C31.79 0.535136 30.336 0.199536 28.2072 0.107536C26.0784 0.0155363 25.3932 -0.00806374 19.9616 0.00233626C14.53 0.0127363 13.85 0.0359363 11.7168 0.139936ZM11.9504 36.2951C10.0004 36.2103 8.94163 35.8863 8.23603 35.6151C7.30163 35.2551 6.63603 34.8199 5.93283 34.1235C5.22963 33.4271 4.79763 32.7591 4.43283 31.8267C4.15883 31.1211 3.82883 30.0635 3.73763 28.1135C3.63843 26.0059 3.61763 25.3731 3.60603 20.0335C3.59443 14.6939 3.61483 14.0619 3.70723 11.9535C3.79043 10.0051 4.11643 8.94514 4.38723 8.23994C4.74723 7.30434 5.18083 6.63994 5.87883 5.93714C6.57683 5.23434 7.24283 4.80154 8.17603 4.43674C8.88083 4.16154 9.93843 3.83434 11.8876 3.74154C13.9968 3.64154 14.6288 3.62154 19.9676 3.60994C25.3064 3.59834 25.94 3.61834 28.05 3.71114C29.9984 3.79594 31.0588 4.11874 31.7632 4.39114C32.698 4.75114 33.3632 5.18354 34.066 5.88274C34.7688 6.58194 35.202 7.24554 35.5668 8.18074C35.8424 8.88354 36.1696 9.94074 36.2616 11.8911C36.362 14.0003 36.3848 14.6327 36.3944 19.9711C36.404 25.3095 36.3852 25.9435 36.2928 28.0511C36.2076 30.0011 35.8844 31.0603 35.6128 31.7667C35.2528 32.7007 34.8188 33.3667 34.1204 34.0691C33.422 34.7715 32.7568 35.2043 31.8232 35.5691C31.1192 35.8439 30.0604 36.1719 28.1128 36.2647C26.0036 36.3639 25.3716 36.3847 20.0308 36.3963C14.69 36.4079 14.06 36.3863 11.9508 36.2951M28.2548 9.31074C28.2556 9.78544 28.3972 10.2493 28.6616 10.6435C28.926 11.0378 29.3014 11.3448 29.7403 11.5256C30.1792 11.7065 30.6618 11.7532 31.1273 11.6598C31.5927 11.5663 32.0199 11.337 32.355 11.0007C32.69 10.6644 32.9178 10.2363 33.0096 9.77053C33.1013 9.30477 33.0529 8.82227 32.8704 8.38404C32.6879 7.94582 32.3795 7.57156 31.9843 7.3086C31.5891 7.04564 31.1247 6.90579 30.65 6.90674C30.0136 6.90801 29.4038 7.16197 28.9547 7.61279C28.5055 8.0636 28.2538 8.67435 28.2548 9.31074ZM9.73083 20.0199C9.74203 25.6919 14.3484 30.2795 20.0192 30.2687C25.69 30.2579 30.2808 25.6519 30.27 19.9799C30.2592 14.3079 25.6516 9.71914 19.98 9.73034C14.3084 9.74154 9.72003 14.3487 9.73083 20.0199ZM13.3332 20.0127C13.3306 18.6942 13.7191 17.4044 14.4495 16.3066C15.1798 15.2089 16.2194 14.3523 17.4366 13.8453C18.6538 13.3383 19.994 13.2036 21.2877 13.4583C22.5814 13.713 23.7706 14.3456 24.7048 15.2761C25.639 16.2066 26.2763 17.3933 26.5361 18.686C26.7959 19.9787 26.6666 21.3194 26.1644 22.5386C25.6622 23.7578 24.8098 24.8007 23.7149 25.5354C22.62 26.2702 21.3318 26.6637 20.0132 26.6663C19.1377 26.6682 18.2704 26.4975 17.4608 26.1641C16.6513 25.8307 15.9153 25.3411 15.295 24.7232C14.6747 24.1054 14.1821 23.3714 13.8455 22.5631C13.5089 21.7549 13.3349 20.8883 13.3332 20.0127Z"></path></svg>
              </div>
              <div className='w-25 h-25 border shadow-2xl hover:scale-110 duration-300 px-9 py-9 bg-amber-400 rounded-full text-white xl:h-25 xl:w-25 xl:px-9 xl:py-9 lg:w-20 lg:h-20 lg:px-7 lg:py-7 sm:w-18 sm:h-18 sm:px-6 sm:py-6'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor"></path></svg>
              </div>
              <div className='w-25 h-25 border shadow-2xl hover:scale-110 duration-300 bg-amber-400 rounded-full text-white xl:h-25 xl:w-25 lg:w-20 lg:h-20 lg:px-7 lg:py-7 sm:w-18 sm:h-18 sm:px-6 sm:py-6'>

              </div>
            </div>
            </div>
            <div className='w-1/2'>
              <form action="" className='px-6 mt-6 sm:mt-5'>
                <div className='flex gap-5 w-full sm:flex-col xl:flex-row'>
                  <div>
                    <label htmlFor="" className='text-2xl font-black text-white xl:text-2xl lg:text-xl sm:text-lg'>NAME</label>
                    <div>
                      <input type="text" className='border outline-none shadow-2xl border-white rounded-md w-70 mt-2 px-5 py-3 xl:w-65 lg:w-105 md:w-70 sm:w-60 sm:mt-1' name="" id="" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className='text-2xl font-black text-white xl:text-2xl lg:text-xl sm:text-lg'>EMAIL</label>
                    <div>
                      <input type="email" className='border outline-none shadow-2xl border-white rounded-md w-70 mt-2 px-5 py-3 xl:w-65 lg:w-105 md:w-70 sm:w-60 sm:mt-1' name="" id="" />
                    </div>
                  </div>
                </div>
                <div className='mt-6 xl:mt-6 sm:mt-5'>
                  <label htmlFor="" className='text-2xl font-black text-white xl:text-2xl lg:text-xl sm:text-lg'>SUBJECT</label>
                  <div>
                    <input type="text" className='border outline-none shadow-2xl border-white rounded-md w-145 mt-2 px-5 py-3 xl:w-135 lg:w-105 md:w-70 sm:w-60 sm:mt-1'/>
                  </div>
                </div>
                <div className='mt-6 xl:mt-6 sm:mt-5'>
                  <label htmlFor="" className='text-2xl font-black text-white xl:text-2xl lg:text-xl sm:text-lg'>MESSAGE</label>
                  <div>
                    <textarea name="Message" className='border outline-none shadow-2xl border-white rounded-md w-145 mt-2 px-5 py-15 resize-none xl:w-135 xl:h-50 lg:w-105 md:w-70 sm:w-60 sm:py-10 sm:mt-1' id=""></textarea>
                  </div>
                </div>
                <div className='mt-10 xl:mt-8 sm:mt-10'>
                  <button className='hover:bg-amber-500 hover:text-white hover:scale-105 duration-300 bg-white px-10 py-3 border shadow-2xl border-white rounded-md w-full font-black text-xl text-amber-500 xl:text-xl lg:text-lg sm:text-base xl:w-135 xl:h-15 lg:w-105 md:w-70 sm:w-60 '>SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact