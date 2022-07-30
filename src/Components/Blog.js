import React from 'react'
import blog01 from '../media/blog01.png'
import blog02 from '../media/blog02.png'
import blog03 from '../media/blog03.png'
import circle from '../media/circle.png'
import Dots from '../media/Dots.png'

export default function Blog() {
    return (
        <div className='mt-[200px] bg-[#FFFCF4]'>
            <div className='mt-[96px]'>
                <p className='text-center font-[700] text-[38px] pt-[96px]'>Our blog</p>
                <p className='text-center text-[#696262] mt-[16px]'>Read our regular travel blog and know the latest update</p>
                <p className='text-center text-[#696262] mb-[55px]'>of tour and travel</p>
            </div>
            <div className='mx-[135px] flex justify-between lg:flex-col lg:items-center'>
                <div className='w-[370px] h-[467px] bg-white rounded-[16px] xl:h-[356px] lg:w-[320px] lg:mb-5'>
                    <img src={blog01} className='w-[370px] h-[250px] xl:h-[180px]' />
                    <div className='mx-[20px]'>
                        <div className='flex items-center mt-[20px]'>
                            <img src={circle} className='w-[6px] h-[6px]' />
                            <p className='text-[#5F5B53]'>21 November 2021</p>
                        </div>
                        <hr className='border-[1px] border-[#E2DFDA] w-[160px] mb-[25px] mt-[12px]' />
                        <p className='font-[600]'>How to become a pro web designer in</p>
                        <p className='font-[600] mb-[12px]'>2022 and get remot job?</p>
                        <button className='w-[118px] bg-[#FFB900] text-white rounded-[26px] h-[52px] text-[14px] xl:w-[80px] xl:h-[35px] hover:bg-[#be8f0e]'>Read More</button>
                    </div>
                </div>

                <div className='w-[370px] h-[467px] bg-white rounded-[16px] xl:h-[356px] lg:w-[320px] lg:mb-5'>
                    <img src={blog02} className='w-[370px] h-[250px] xl:h-[180px]' />
                    <div className='mx-[20px]'>
                        <div className='flex items-center mt-[20px]'>
                            <img src={circle} className='w-[6px] h-[6px]' />
                            <p className='text-[#5F5B53]'>21 November 2021</p>
                        </div>
                        <hr className='border-[1px] border-[#E2DFDA] w-[160px] mb-[25px] mt-[12px]' />
                        <p className='font-[600]'>How to become a pro web designer in</p>
                        <p className='font-[600] mb-[12px]'>2022 and get remot job?</p>
                        <button className='w-[118px] bg-black text-white rounded-[26px] h-[52px] text-[14px] xl:w-[80px] xl:h-[35px] hover:bg-gray-900'>Read More</button>
                    </div>
                </div>

                <div className='w-[370px] h-[467px] bg-white rounded-[16px] xl:h-[356px] lg:w-[320px] lg:mb-5'>
                    <img src={blog03} className='w-[370px] h-[250px] xl:h-[180px]' />
                    <div className='mx-[20px]'>
                        <div className='flex items-center mt-[20px]'>
                            <img src={circle} className='w-[6px] h-[6px]' />
                            <p className='text-[#5F5B53]'>21 November 2021</p>
                        </div>
                        <hr className='border-[1px] border-[#E2DFDA] w-[160px] mb-[25px] mt-[12px]' />
                        <p className='font-[600]'>How to become a pro web designer in</p>
                        <p className='font-[600] mb-[12px]'>2022 and get remot job?</p>
                        <button className='w-[118px] bg-black text-white rounded-[26px] h-[52px] text-[14px] xl:w-[80px] xl:h-[35px] hover:bg-gray-900'>Read More</button>
                    </div>
                </div>
            </div>
            <img src={Dots} className='mx-auto mt-[38px] pb-[96px]'/>
        </div>
    )
}
