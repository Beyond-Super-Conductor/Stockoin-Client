import Image from 'next/image'
import React, { Suspense } from 'react'

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul className='w-full flex flex-col gap-2 items-center justify-center'>
        <li className='w-full flex items-center justify-center'>
        <button className='w-full pr-20 flex items-center rounded-[2px] bg-[#03c75a] min-w-[280px] max-w-[400px]'>
          <img src="/naverLogo.png" alt="logo" className='w-[54px] h-[54px]' />
            <p className='text-lg w-full text-end'>네이버 로그인</p>
          </button>
        </li>
        <li className='w-full flex items-center justify-center'>
        <button className='w-full pr-20 flex items-center rounded-[2px] bg-[#4285f4]  box-border min-w-[280px] max-w-[400px]'>
          <img src="/googleLogo.jpeg" alt="logo" className='w-[48px] h-[48px] p-1' />
            <p className='text-lg text-white w-full text-end'>구글 로그인</p>
          </button>
        </li>
        <li className='w-full flex items-center justify-center'>
        <button className='w-full pr-20 flex items-center rounded-[2px] bg-[#FEE500] min-w-[280px]  max-w-[400px]'>
          <img src="/kakaoLogo.jpeg" alt="logo" className='w-[48px] h-[48px]' />
            <p className='text-lg  w-full text-end text-[#000]'>카카오 로그인</p>
          </button>
        </li>
      </ul>
    </Suspense>
  )
}
