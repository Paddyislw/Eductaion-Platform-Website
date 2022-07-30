import React from 'react'
import { useState } from 'react'

export default function NavBar() {
  const [toggle, settoggle] = useState(false)
  return (
    <div className='flex justify-between px-[135px] items-center pt-[36px] bg-[#FFFCF4] xl:px-[70px] lg:px-[30px] md:px-[10px] relative'>
      <p className='text-[24px] font-[700]'>Lesson</p>
      <div className='flex space-x-16 items-center md:hidden'>
        <div>
          <p className='font-[600]'>Home</p>
          <hr className='border-[1px] border-black w-3 rounded-lg ml-[1px]' />
        </div>
        <p className='font-[400]'>Courses</p>
        <p className='font-[400]'>Pricing</p>
        <p className='font-[400]'>Reviews</p>
        <button className='w-[144px] bg-black text-white rounded-[24.5px] h-[49px] hover:bg-gray-900'>Sign Up</button>
      </div>
      <div className='hidden md:block'>
        <button onClick={()=>{settoggle(!toggle)}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </button>
        {toggle && <div className='shadow-lg flex flex-col bg-[#FFFCF4] absolute border-[1px] border-black rounded-lg right-3 px-12 py-3 space-y-5 z-20 font-semibold' >
          <p className='hover:scale-110 cursor-pointer'>Home</p>
          <p className='hover:scale-110 cursor-pointer'>Courses</p>
          <p className='hover:scale-110 cursor-pointer'>Pricing</p>
          <p className='hover:scale-110 cursor-pointer'>Reviews</p>
          <button className='hover:scale-110'>Sign Up</button>
        </div>}
      </div>
    </div>
  )
}
