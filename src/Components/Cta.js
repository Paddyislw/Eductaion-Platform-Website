import React from 'react'
import ctaImage from '../media/ctaImage.png'

export default function Cta() {
  return (
    <div className='bg-[#fefeff] mt-[200px] '>
        <div className='px-[135px] flex justify-between lg:flex-col lg:items-center xl:px-[70px] lg:px-[30px] md:px-[10px]'>
            <div>
                <div className='text-[#171100] font-[700] text-[38px] lg:text-[30px]'>
                    <p>Take the next step toward your</p>
                    <p>personal and professional goals</p>
                    <p>with Lesson</p>
                </div>
                <div className='font-[400] text-[#5F5B53] mt-[16px] mb-[50px]'>
                    <p>Take the next step toward. Join now to receive personalized  and more</p>
                    <p> recommendations from the full Coursera catalog.</p>
                </div>
                <button className='w-[137px] bg-[#FFB900] text-white rounded-[26px] h-[52px] hover:bg-[#be8f0e]'>Join Now</button>
            </div>
            <div>
                <img src={ctaImage} className='w-[440px] h-[470px] lg:mt-10 lg:w-[420px] lg:h-auto md:w-[380px] sm:w-[330px]'/>
            </div>
        </div>
    </div>
    
  )
}
