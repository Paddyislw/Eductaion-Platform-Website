import React from 'react'
import student from '../media/student.png'
import icon1 from '../media/icon1.png'
import icon2 from '../media/icon2.png'
import icon3 from '../media/icon3.png'
import media from '../media/media.png'

export default function HomePage() {
    return (

        <div className='flex px-[135px] pt-[65px] justify-between bg-[#FFFCF4] pb-[65px] xl:px-[70px] lg:px-[30px] md:px-[10px]  sm:flex-col sm:items-center '>
            <div className='relative w-[570px] xl:w-[450px] xl:mx-auto sm:px-[30px] sm:w-[330px]'>
                <img src={student} className='w-[470px] h-[685px] xl:w-[350px] xl:h-auto xl:my-[20%] lg:w-[300px] md:w-[220px] ' />
                <div className='absolute w-[270px] md:w-[150px] h-[244px] bg-white flex flex-col left-[300px] top-[393px] rounded-xl xl:w-[200px] xl:h-[220px] xl:top-[360px] xl:left-[250px] xl:text-xs lg:w-[180px] lg:h-auto lg:left-[210px] lg:top-[300px] md:left-[150px] md:top-[210px]'>
                    <div className='flex mt-[28px] xl:mt-[20px] ml-[24px] lg:mt-[10px] md:ml-[10px]'>
                        <img src={icon1} className='w-[48px] h-[48px] lg:h-auto lg:w-[30px]' />
                        <div>
                            <p className='font-[400] text-[14px] text-[#5F5B53]'>20 Courses</p>
                            <p className='font-[600] text-[18px] lg:text-sm'>UI/UX Design</p>
                        </div>
                    </div>
                    <div className='flex mt-[22px] ml-[24px] md:ml-[10px]'>
                        <img src={icon2} className='w-[48px] h-[48px] lg:h-auto lg:w-[30px]' />
                        <div>
                            <p className='font-[400] text-[14px] text-[#5F5B53]'>20 Courses</p>
                            <p className='font-[600] text-[18px] lg:text-sm'>Development</p>
                        </div>
                    </div>
                    <div className='flex mt-[22px] ml-[24px] lg:mb-2 md:ml-[10px]'>
                        <img src={icon3} className='w-[48px] h-[48px] lg:h-auto lg:w-[30px]' />
                        <div>
                            <p className='font-[400] text-[14px] text-[#5F5B53]'>30 Courses</p>
                            <p className='font-[600] text-[18px] lg:text-sm'>Marketing</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[470px] h-[558px] mt-[64px] xl:h-auto xl:w-[400px] sm:w-[330px]'>
                <p className='text-[58px] font-[700] xl:text-[46px] lg:text-[35px] md:text-[25px]'>Learn without</p>
                <p className='text-[58px] font-[700] xl:text-[46px] lg:text-[35px] md:text-[25px]'>limits and spread</p>
                <p className='text-[58px] font-[700] xl:text-[46px] lg:text-[35px] md:text-[25px]'>knowledge</p>
                <p className='font-[400] text-[18px] text-[#5F5B53] md:text-[14px]'>Build new skills for that "this is my year" feeling with</p>
                <p className='font-[400] text-[18px] text-[#5F5B53] md:text-[14px]'>courses,certificates, and degrees from world-class</p>
                <p className='font-[400] text-[18px] text-[#5F5B53] md:text-[14px]'>universities and companies</p>
                <div className='mt-[38px] space-x-4 flex items-center'>
                    <button className='w-[180px] bg-[#FFB900] rounded-[32px] h-[64px] text-white font-[600] text-[18px] md:w-[100px] md:h-[40px] md:text-sm hover:bg-[#be8f0e]'>See Courses</button>

                    <div className='flex  font-[600] text-[18px] items-center'>
                        <button><img src={media} className='w-[70px]' /></button>
                        <button><p className='pb-2'>Watch Video</p></button>
                    </div>
                </div>
                <p className='text-[#5F5B53] text-[18px] mt-[48px] md:mt-[20px]'>Recent engagement</p>
                <div className='flex mt-[8px] items-center'>
                    <p className='text-[#5F5B53] mr-[28px] font-lg'><span className='text-[44px] text-black font-[700] lg:text-[30px] md:text-[22px]'>50K</span> Students</p>
                    <p className='text-[#5F5B53] font-lg'><span className='text-[44px] text-black font-[700] lg:text-[30px] md:text-[22px]'>70+</span> Courses</p>
                </div>
            </div>
        </div>

    )
}
