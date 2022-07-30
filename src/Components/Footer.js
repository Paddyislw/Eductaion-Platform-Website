import React from 'react'
import Social from '../media/Social.png'

export default function Footer() {
    return (
        <div className='bg-[#2E2100] h-[428px] md:h-full'>
            <div className='px-[135px] flex pt-[96px] justify-between xl:px-[70px] lg:px-[30px] md:px-[10px] md:flex-col md:items-center '>
                <div className='flex flex-col'>
                    <p className='text-white text-[24px] font-[700] mb-[18px]'>Lesson</p>
                    <p className='text-[#BFBCB2]'>Need to help for your dream Career?</p>
                    <p className='text-[#BFBCB2]'>trust us. With Lesson, study becomes</p>
                    <p className='text-[#BFBCB2] mb-[18px]'>a lot easier with us.</p>
                    <img src={Social} className='w-[111px]' />
                </div>
                <div className='md:flex items-center md:space-x-10   md:mt-6 hidden'>
                    <div className='flex flex-col text-[#BFBCB2] text-[14px]  '>
                        <p className='text-white text-[16px] font-[600] mb-[14px]'>Company</p>
                        <hr className='border-[1px] border-[#59554B] mb-[28px]' />
                        <p className='mb-[12px]'>About Us</p>
                        <p className='mb-[12px]'>Features</p>
                        <p className='mb-[12px]'>Our Pricing</p>
                        <p className='mb-[38px]'>Latest News</p>
                    </div>
                    <div className='flex flex-col text-[#BFBCB2] text-[14px]'>
                        <p className='text-white text-[16px] font-[600] mb-[14px]'>Support</p>
                        <hr className='border-[1px] border-[#59554B] mb-[28px]' />
                        <p className='mb-[12px]'>FAQ's</p>
                        <p className='mb-[12px]'>Terms & Conditions</p>
                        <p className='mb-[12px]'>Privacy Policy</p>
                        <p className='mb-[38px]'>Contact Us</p>
                    </div>
                </div>
                <div className='flex flex-col text-[#BFBCB2] text-[14px]  md:hidden'>
                    <p className='text-white text-[16px] font-[600] mb-[14px]'>Company</p>
                    <hr className='border-[1px] border-[#59554B] mb-[28px]' />
                    <p className='mb-[12px]'>About Us</p>
                    <p className='mb-[12px]'>Features</p>
                    <p className='mb-[12px]'>Our Pricing</p>
                    <p className='mb-[38px]'>Latest News</p>
                </div>
                <div className='flex flex-col text-[#BFBCB2] text-[14px] md:hidden'>
                    <p className='text-white text-[16px] font-[600] mb-[14px]'>Support</p>
                    <hr className='border-[1px] border-[#59554B] mb-[28px]' />
                    <p className='mb-[12px]'>FAQ's</p>
                    <p className='mb-[12px]'>Terms & Conditions</p>
                    <p className='mb-[12px]'>Privacy Policy</p>
                    <p className='mb-[38px]'>Contact Us</p>
                </div>
                <div className='flex flex-col text-[#BFBCB2] text-[14px]'>
                    <p className='text-white text-[16px] font-[600] mb-[14px]'>Address</p>
                    <hr className='border-[1px] border-[#59554B] mb-[28px]' />
                    <p><span className='text-white font-[600]'>Location:</span>Location: 27 Division St, New York,</p>
                    <p className='mb-[12px]'> NY 10002, USA</p>
                    <p className='mb-[12px]'><span className='text-white font-[600]'>Email:</span>email@gmail.com</p>
                    <p className='mb-[38px]'><span className='text-white font-[600]'>Phone:</span>+ 000 1234 567 890</p>
                </div>
            </div>
            <hr className='mx-[135px] mb-[48px] border-[1px] border-[#59554B]' />
            <p className='text-center text-[#807D74] text-[14px] font-[400] '>Copyright ©2022 webdesign.gdn All rights reserved</p>
        </div>
    )
}
