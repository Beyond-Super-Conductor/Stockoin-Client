'use client';

import React from 'react'

export default function GoogleLoginButton() {
  
  // // https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API_KEY]
  const onClickGoogleLogin = () => {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const googleRedirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
    window.location.href = 
    `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`
  }

  return (
    <li className='w-full flex items-center justify-center'>
      <button 
      onClick={onClickGoogleLogin}
      className='w-full pr-20 flex items-center rounded-[2px] bg-[#4285f4]  box-border min-w-[280px] max-w-[400px] shadow-sm shadow-gray-200'>
        <img src="/googleLogo.jpeg" alt="logo" className='w-[48px] h-[48px] p-1' />
        <p className='text-3xl text-white w-full text-end'>구글 로그인</p>
      </button>
    </li>
  )
}
