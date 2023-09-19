'use client'
import SignupForm from '@/app/components/auth/SignupForm';
import useAuth from '@/hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function NaverPage() {
  const { error, user, isLoading, getOAuth } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();

  
  useEffect(() => {
    if(searchParams.has('code')) {
      const redirectUri = process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI
      getOAuth({
        code: searchParams.get('code') as string,
        authProvider:'naver',
        state: searchParams.get('state') as string,
        redirect_uri: redirectUri as string
      })
    }
  },[searchParams])

  useEffect(() => {
    if(user) {
      localStorage.setItem('access_token', user.accessToken);
      localStorage.setItem('refresh_token', user.refreshToken);
      if(user?.isInitProfile){
        router.push('/');
      }
    }
  },[user])
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>회원정보를 확인하고 있습니다</p>}
      {(!error && user && !user?.isInitProfile) && <SignupForm />}
    </div>
  )
}
