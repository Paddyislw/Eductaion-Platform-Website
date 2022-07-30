import React from 'react'
import CardImage01 from '../media/CardImage01.png'
import CardImage02 from '../media/CardImage02.png'
import CardImage03 from '../media/CardImage03.png'
import arrowLeft from '../media/arrowLeft.png'
import arrowRight from '../media/arrowRight.png'

export default function PopularCourses() {
  return (
    <div className='bg-[#fefeff] px-[135px] pt-[200px] pb-[200px] xl:px-[70px] lg:px-[30px] md:px-[10px]'>
      <div className='flex justify-between'>
        <div>
          <p className='text-[38px] font-[700]'>Our popular courses</p>
          <p className='mt-16px text-[#5F5B53] text-[18px]'>Build new skills with new trendy courses and shine</p>
          <p className='text-[#5F5B53] text-[18px]'>for the next future career</p>
        </div>
        <div className='flex'>
          <button className='w-[40px] h-[40px] border-[1px] border-[#FFB900] rounded-full mr-[18px] hover:bg-[#eedfb5]'><img src={arrowLeft} className='mx-auto'/></button>
          <button className='w-[40px] h-[40px] border-[1px] border-[#FFB900] bg-[#FFB900]  rounded-full hover:bg-[#be8f0e]'><img src={arrowRight} className='mx-auto'/></button>
        </div>
      </div>
      <div className='mt-[55px] flex justify-between lg:flex-col lg:items-center'>
        <div className='flex flex-col w-[370px] h-[456px] mr-[30px] rounded-[12px]  border-[1px] border-gray-300 xl:h-[356px] lg:w-[320px] lg:mb-5'>
          <img src={CardImage01} className='w-[370px] h-[278px] xl:h-[180px]' />
          <div className='mx-[22px]'>
            <p className='mt-[16px] font-[600] text-[18px] '>Basic Web design</p>
            <p className='text-[14px] text-[#5F5B53] mt-[6px]'>Get the best course, gain knowledge and</p>
            <p className='text-[14px] text-[#5F5B53] mb-[12px]'>shine for your future career</p>
            <div className='flex justify-between items-center'>
              <p className='font-[600] text-[18px]'>$120.75</p>
              <button className='w-[118px] h-[50px] bg-[#FFB900] text-white rounded-[25px] text-[14px] xl:w-[80px] xl:h-[35px] hover:bg-[#be8f0e]'>Book Now</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[370px] h-[456px] mr-[30px] rounded-[12px] border-[1px] border-gray-300 xl:h-[356px] lg:w-[320px] lg:mb-5'>
          <img src={CardImage02} className='w-[370px] h-[278px] xl:h-[180px]' />
          <div className='mx-[22px]'>
            <p className='mt-[16px] font-[600] text-[18px]'>UI/UX design</p>
            <p className='text-[14px] text-[#5F5B53] mt-[6px]'>Get the best course, gain knowledge and</p>
            <p className='text-[14px] text-[#5F5B53] mb-[12px]'>shine for your future career</p>
            <div className='flex justify-between items-center'>
              <p className='font-[600] text-[18px]'>$120.75</p>
              <button className='w-[118px] h-[50px] text-white bg-black rounded-[25px] text-[14px] xl:w-[80px] xl:h-[35px] hover:bg-gray-900'>Book Now</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-[370px] h-[456px] mr-[30px] rounded-[12px]  border-[1px] border-gray-300  xl:h-[356px] lg:w-[320px]'>
          <img src={CardImage03} className='w-[370px] h-[278px] xl:h-[180px] ' />
          <div className='mx-[22px]'>
            <p className='mt-[16px] font-[600] text-[18px]'>Web App design</p>
            <p className='text-[14px] text-[#5F5B53] mt-[6px]'>Get the best course, gain knowledge and</p>
            <p className='text-[14px] text-[#5F5B53] mb-[12px]'>shine for your future career</p>
            <div className='flex justify-between items-center'>
              <p className='font-[600] text-[18px]'>$120.75</p>
              <button className='w-[118px] h-[50px] text-white bg-black rounded-[25px] text-[14px] xl:w-[80px] xl:h-[35px] hover:bg-gray-900'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
