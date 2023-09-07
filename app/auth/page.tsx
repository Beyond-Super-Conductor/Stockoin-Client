import React, { Suspense } from 'react'

export default function AuthPage() {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <fieldset className='w-full flex flex-col gap-2 items-center justify-center border border-white py-10'>
        <legend className='px-4 text-2xl'>소셜로그인</legend>
        <li className='w-full flex items-center justify-center'>
        <button  className='w-full pr-20 flex items-center rounded-[2px] bg-[#03c75a] min-w-[280px] max-w-[400px] shadow-sm shadow-gray-200'>
          <img src="/naverLogo.png" alt="logo" className='w-[54px] h-[54px]' />
            <p className='text-3xl w-full text-end'>네이버 로그인</p>
          </button>
        </li>
        <li className='w-full flex items-center justify-center'>
        <button  className='w-full pr-20 flex items-center rounded-[2px] bg-[#4285f4]  box-border min-w-[280px] max-w-[400px] shadow-sm shadow-gray-200'>
          <img src="/googleLogo.jpeg" alt="logo" className='w-[48px] h-[48px] p-1' />
            <p className='text-3xl text-white w-full text-end'>구글 로그인</p>
          </button>
        </li>
        <li className='w-full flex items-center justify-center'>
        <button  className='w-full pr-20 flex items-center rounded-[2px] bg-[#FEE500] min-w-[280px]  max-w-[400px] shadow-sm shadow-gray-200'>
          <img src="/kakaoLogo.jpeg" alt="logo" className='w-[48px] h-[48px]' />
            <p className='text-3xl  w-full text-end text-[#000]'>카카오 로그인</p>
          </button>
        </li>
      </fieldset>
    </Suspense>
  )
}
