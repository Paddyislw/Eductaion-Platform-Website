import React from 'react'
import vector from '../media/vector.png'
import testimonlialProfile from '../media/testimonlialProfile.png'
import testimonlial from '../media/testimonlial.png'

export default function Testimonial() {
    return (
        <div className='h-[380px] bg-[#2E2100]'>
            <div className='flex px-[135px] justify-between items-center py-[96px] md:py-[70px] sm:py-[30px] xl:px-[70px] lg:px-[30px] md:px-[10px] sm:flex-col'>
                <div className='flex flex-col'>
                    <img src={testimonlialProfile} className='w-[72px] h-[72px] md:w-[60px] md:h-auto sm:w-[40px]'/>
                    <p className='text-white font-[700] text-[24px] mt-[18px] md:text-[20px] sm:text-[18px]'>Peter Moor</p>
                    <p className='text-white font-[400] text-[14px] md:text-xs'>Student of web Design</p>
                    <img src={testimonlial} className='h-[6px] w-[24px] mt-[28px] md:w-[20px] sm:w-[16px]'/> 
                </div>
                <div className='flex flex-col relative'>
                    <img src={vector}  className='w-[28px] h-[30px] absolute right-[100%] bottom-[100%]'/>
                    <div className=' text-[26px] font-[400] italic text-white md:text-[20px] sm:text-[18px]'>
                        <p>Not only does my resume look impressive-filled with the</p>
                        <p>names and logos of world-class institutions-but these</p>
                        <p>certificates also bring me closer to my career goals by</p>
                        <p>validating the skills I've learned</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
