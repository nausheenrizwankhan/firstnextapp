import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex items-center h-screen'>
    <div className='flex flex-col justify-center w-1/2 gap-6 px-14'>
      <h1 className='w-[548px] h-51] font-bold text-[44px] leading-[53.25px] text-black'>Welcome To Our Website</h1>
      <p className='w-[571px] h-[156px] font-normal text-[32px] leading-[38.73px] text-[#4C4C4C]'>Next.js is a powerful React framework for building optimized, server-rendered applications with ease. It supports both static and dynamic rendering.
          standard</p>
      <button className='W-[237PX] h-66px] bg-black text-white p-4 font-normal leading-[33.89px] text-[28px]'>Contact Us</button>
    </div>
    <div>
        <Image src={"/image.png"} width={502} height={465}alt="image"/>
        </div>
    </div>
  )
}

export default Hero

