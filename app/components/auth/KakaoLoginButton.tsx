'use client'
import React from 'react'

export default function KakaoLoginButton() {
  
  const onClickKakaoLogin = () => {
    
    const redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
    const clientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
    
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`

    window.location.href = kakaoURL;
  }

  return (
    <li className='w-full flex items-center justify-center'>
    <button
      onClick={onClickKakaoLogin}
      className='w-full pr-20 flex items-center rounded-[2px] bg-[#FEE500] min-w-[280px]  max-w-[400px] shadow-sm shadow-gray-200'>
      <img src="/kakaoLogo.jpeg" alt="logo" className='w-[48px] h-[48px]' />
        <p className='text-3xl  w-full text-end text-[#000]'>카카오 로그인</p>
      </button>
    </li>
  )
}
