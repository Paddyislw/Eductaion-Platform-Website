import React from 'react'
import feature01 from '../media/feature01.png'
import feature02 from '../media/feature02.png'

export default function Features() {
  return (
    <div className='bg-[#fefeff] mt-[234px]'>
        <div className='px-[135px] flex justify-between lg:flex-col lg:items-center xl:px-[70px] lg:px-[30px] md:px-[10px]'>
            <div className='flex'>
                <img src={feature01} className='w-[270px] h-[405px] mr-[30px] xl:h-auto xl:w-[180px] sm:w-[140px] '/>
                <img src={feature02} className='w-[270px] h-[405px] relative bottom-[10%] xl:h-auto xl:w-[180px] sm:w-[140px]'/>
            </div>
            <div className='flex flex-col items-start'>
                <p className='font-[700] text-[38px] lg:text-[30px] md:pt-6'>Learner outcomes through</p>
                <p className='font-[700] text-[38px] mb-[16px] lg:text-[30px]'>our awesome platform</p>
                <p className='text-[#5F5B53] font-[400]'>87% of people learning for professional development</p>
                <p className='text-[#5F5B53] font-[400]'>report career benifits like getting a promotion, a raise, or</p>
                <p className='text-[#5F5B53] font-[400] mb-[24px]'>starting a new career</p>
                <p className='text-[#5F5B53] font-[400] mb-[38px]'>Lesson impact Report</p>
                <button className='w-[137px] bg-[#FFB900] text-white rounded-[26px] h-[52px] md:mx-auto hover:bg-[#be8f0e]'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}
