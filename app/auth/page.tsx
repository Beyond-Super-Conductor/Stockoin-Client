import React, { Suspense } from 'react'
import NaverLoginButton from '../components/auth/NaverLoginButton';
import KakaoLoginButton from '../components/auth/KakaoLoginButton';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <fieldset className='w-full flex flex-col gap-2 items-center justify-center border border-white py-10'>
        <legend className='px-4 text-2xl'>소셜로그인</legend>
        <li className='w-full flex items-center justify-center'>
        <NaverLoginButton />
        </li>
        <GoogleLoginButton />
        <KakaoLoginButton />
      </fieldset>
    </Suspense>
  )
}
